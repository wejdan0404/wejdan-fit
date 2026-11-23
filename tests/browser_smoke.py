from playwright.sync_api import sync_playwright
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
html=(root/'index.html').read_text()
html=re.sub(r'<script\s+src="[^"]+"\s*>\s*</script>', '', html)
html=re.sub(r'<link[^>]*rel="stylesheet"[^>]*>', '', html)
html=html.replace('</head>',f'<style>{(root/"styles.css").read_text()}</style></head>')
jsfiles=['fit-data.js','masari-catalog.js','masari-migration.js','fit-core.js','fit-next.js','exercise-coach.js','app.js']
with sync_playwright() as p:
  browser=p.chromium.launch(headless=True, executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
  errors=[]
  def new_page(saved=None):
    page=browser.new_page(viewport={'width':390,'height':844},device_scale_factor=1,locale='ar-SA',is_mobile=True,has_touch=True)
    page.on('pageerror',lambda exc:errors.append(str(exc)))
    page.set_content(html)
    page.evaluate('''(v)=>{const m=new Map(v?[["wejdan-fit-app-v1",v]]:[]);Object.defineProperty(window,"localStorage",{configurable:true,value:{getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k)}})}''',saved)
    for path in jsfiles:
      page.evaluate((root/path).read_text())
    return page
  page=new_page()
  page.locator('#setupForm input[name="startWeight"]').fill('80')
  page.locator('#setupForm input[name="targetWeight"]').fill('65')
  page.locator('#setupForm input[name="height"]').fill('168')
  page.locator('#setupForm input[name="age"]').fill('22')
  page.locator('#setupForm button[type="submit"]').click()
  assert page.get_by_text('خطة يومك، أنتِ تختارين').count()>0
  page.locator('[data-action="day-plan"][data-plan="rest"]').click()
  assert page.get_by_text('اليوم للراحة').count()>0
  saved=page.evaluate("localStorage.getItem('wejdan-fit-app-v1')")
  page.close();page=new_page(saved)
  assert page.get_by_text('اليوم للراحة').count()>0
  page.locator('[data-action="day-plan"][data-plan="A"]').click()
  page.locator('button[data-view="workout"]').last.click()
  assert page.get_by_text('قبل التمرين · 3 خطوات').count()>0
  page.locator('[data-action="exercise-details"][data-exercise="A03"]').click()
  assert page.locator('.coach-cues li').count()==3
  assert 'الفيديو يثبت المطاط عند القدمين' in page.locator('.modal').inner_text()
  page.locator('[data-action="close-modal"]').click()
  page.locator('button[data-session="B"]').click()
  page.locator('[data-action="exercise-details"][data-exercise="B04"]').click()
  assert 'لا تتابعي التقليد تلقائيًا' in page.locator('.modal').inner_text()
  page.locator('[data-action="close-modal"]').click()
  page.locator('button[data-session="A"]').click()
  page.locator('[data-action="toggle-set"]').first.click()
  page.locator('[data-action="partial-workout"]').click()
  w=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).workouts")
  d=list(w)[0]
  assert w[d]['finished'] == False and w[d]['status']=='partial',w
  page.locator('[data-workout-set-field="reps"][data-exercise="A01"]').first.fill('8')
  page.locator('[data-workout-set-field="kg"][data-exercise="A01"]').first.fill('0.5')
  page.locator('[data-workout-set-field="reps"][data-exercise="A01"]').first.press('Tab')
  for id in ['A02','A03','A04','A05','A06']:
    page.locator(f'[data-action="toggle-set"][data-exercise="{id}"]').first.click()
  page.locator('[data-action="finish-workout"]').click()
  w=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).workouts")
  assert w[d]['finished'] == True,w
  assert w[d]['setMetrics']['A01'][0]['reps']==8,w[d]
  saved=page.evaluate("localStorage.getItem('wejdan-fit-app-v1')");page.close();page=new_page(saved)
  w=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).workouts")
  assert w[d]['finished'] == True
  page.locator('button[data-view="progress"]').last.click()
  page.locator('[data-action="edit-session"]').first.click()
  assert page.locator('#editSessionForm').count()==1
  page.locator('#editSessionForm input[name="reps_A01_0"]').fill('9')
  page.locator('#editSessionForm button[type="submit"]').click()
  w=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).workouts")
  assert w[d]['setMetrics']['A01'][0]['reps']==9
  page.locator('button[data-view="food"]').last.click()
  assert page.locator('[data-action="masari-more-recipes"]').count()==1
  page.locator('[data-action="masari-more-recipes"]').click()
  assert page.locator('[data-action="masari-recipe"]').count()==48
  page.locator('[data-action="masari-more-recipes"]').click()
  page.locator('[data-action="masari-more-recipes"]').click()
  assert page.locator('[data-action="masari-recipe"]').count()==85
  page.locator('[data-action="open-meal"]').first.click()
  page.locator('#mealForm input[name="name"]').fill('دجاج وأرز اختباري')
  page.locator('#mealForm input[name="cal"]').fill('450')
  page.locator('#mealForm button[type="submit"]').click()
  assert page.get_by_text('دجاج وأرز اختباري').count()>0
  page.locator('[data-action="repeat-meal"]').first.click()
  assert len(page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).meals"))==2
  page.locator('[data-action="edit-meal"]').first.click()
  page.locator('#mealForm input[name="cal"]').fill('460')
  page.locator('#mealForm button[type="submit"]').click()
  savedMeals=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).meals")
  assert len(savedMeals)==2 and 460 in [m['cal'] for m in savedMeals]
  page.locator('button[data-view="workout"]').last.click()
  page.locator('[data-action="masari-more-exercises"]').click()
  assert page.locator('[data-action="masari-exercise"]').count()==46
  page.locator('button[data-view="home"]').last.click()
  page.locator('[data-action="open-checkin"]').first.click()
  page.locator('#checkinForm input[name="neck"]').fill('2')
  page.locator('#checkinForm input[name="back"]').fill('3')
  page.locator('#checkinForm button[type="submit"]').click()
  saved=page.evaluate("localStorage.getItem('wejdan-fit-app-v1')");page.close();page=new_page(saved)
  state=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1'))")
  assert list(state['checkins'].values())[0]['neck']==2
  page.locator('[data-action="recovery-mode"][data-mode="gentle"]').click()
  assert page.get_by_text('خففي المهام الاختيارية').count()>0
  page.locator('button[data-view="food"]').last.click()
  page.locator('#shoppingForm input[name="name"]').fill('رز بسمتي')
  page.locator('#shoppingForm button[type="submit"]').click()
  assert page.get_by_text('رز بسمتي').count()>0
  page.locator('[data-shop-toggle]').first.check()
  page.locator('[data-action="masari-recipe"]').first.click()
  assert page.locator('#masariPortion').count()==1
  page.locator('#masariPortion').select_option('0.5')
  page.locator('#masariAllergyConfirm').check()
  page.locator('#masariEstimateConfirm').check()
  page.locator('[data-action="masari-use-recipe"]').click()
  assert page.locator('#mealForm input[name="cal"]').count()==1
  page.locator('#mealForm button[type="submit"]').click()
  page.locator('button[data-view="progress"]').last.click()
  page.locator('#measureForm input[name="waist"]').fill('90.2')
  page.locator('#measureForm button[type="submit"]').click()
  assert len(page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1')).measurements"))==1
  page.locator('#reflectionForm textarea[name="text"]').fill('تعلمت أن الراحة جزء من الخطة')
  page.locator('#reflectionForm button[type="submit"]').click()
  page.locator('button[data-view="more"]').last.click()
  page.locator('[data-action="medical-preferences"]').click()
  page.locator('#medicalPrefsForm textarea[name="medicalNotes"]').fill('تعليمات الطبيبة مدخلة من المستخدم')
  page.locator('#medicalPrefsForm input[value="A01"]').check()
  page.locator('#medicalPrefsForm button[type="submit"]').click()
  page.locator('button[data-view="workout"]').last.click()
  assert page.locator('[data-action="toggle-set"][data-exercise="A01"]').first.is_disabled()
  saved=page.evaluate("localStorage.getItem('wejdan-fit-app-v1')");page.close();page=new_page(saved)
  savedState=page.evaluate("JSON.parse(localStorage.getItem('wejdan-fit-app-v1'))")
  assert len(savedState['shopping'])==1 and savedState['shopping'][0]['done']==True
  assert len(savedState['measurements'])==1 and savedState['measurements'][0]['waist']==90.2
  assert savedState['settings']['avoidExercises']==['A01']
  assert savedState['schemaVersion']==3
  page.screenshot(path=str(root/'reports'/'mobile_sprint02.png'),full_page=True)
  overflow=page.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth')
  assert overflow<=1, f'Horizontal overflow {overflow}'
  assert not errors, f'Browser JS errors: {errors}'
  print(json.dumps({'browser':'Chromium emulated DOM','viewport':'390x844','workout':'partial -> completed persisted in simulated storage','set_metrics':'persisted','recipes_visible':85,'reference_exercises_visible':46,'checkin':'saved','additional':['recovery mode','shopping','masari portion','body measurements','reflection','medical restrictions','migration v3'],'horizontal_overflow':overflow,'errors':errors},ensure_ascii=False))
  browser.close()
