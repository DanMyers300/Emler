import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time
import pyautogui
import datetime
from datetime import datetime, timedelta

# Get the current date
current_date = datetime.now()

# Calculate the date two weeks from the current date
two_weeks_from_now = current_date + timedelta(weeks=2)

#screensize for autogui
screenWidth, screenHeight = pyautogui.size()

#Login to ICP
driver = webdriver.Chrome()
driver.get('https://app.iclasspro.com/a/emlerdallas')
id_box = driver.find_element('id', 'uname')
id_box.send_keys('dmyerspf')
pass_box = driver.find_element('id', 'passwd')
pass_box.send_keys('Emler123')
login_button = driver.find_element('id', 'loginbutton')
login_button.click()

#Run class list report
driver.get('https://app.iclasspro.com/a/emlerdallas/#!/report/classes/1')
time.sleep(2)
pyautogui.click(500,550)
time.sleep(1)
pyautogui.click(500,580)
date_picker = driver.find_element('name', 'endDate')
date_picker.click()
pyautogui.write(two_weeks_from_now.strftime("%m/%d/%Y"), interval=0.25)
pyautogui.press('esc')
pyautogui.moveTo(400, 300)
pyautogui.drag(0, 400, 2, button='middle')
pyautogui.click(300,900)
time.sleep(20)
pyautogui.click(700,430)

#Copy everything and paste into google sheets
pyautogui.hotkey('ctrl', 'a', interval=0.25)
pyautogui.hotkey('ctrl', 'c', interval=0.25)

driver.get('https://docs.google.com/spreadsheets/d/1d5fy5eEvuOkgJsr2V2ChUbtltCoA9UzOqnlS13GkAVo/edit#gid=533897983')
pyautogui.hotkey('ctrl', 'tab', interval=0.25)
g_id_box = driver.find_element('name', 'identifier')
g_id_box.send_keys('prestonforest@emlerswimschool.com')
pyautogui.click(635,730)
time.sleep(2)
g_pass_box = driver.find_element('name', 'Passwd')
g_pass_box.send_keys('iswimemler')
pyautogui.click(635,700)
time.sleep(7)
pyautogui.click(540,1000)
time.sleep(1)
pyautogui.click(540,1000)
time.sleep(3)
pyautogui.click(430,1000)
time.sleep(3)
pyautogui.moveTo(200, 975)
pyautogui.dragTo(300, 975, 1, button='left')
pyautogui.click(700,300)
pyautogui.hotkey('ctrl', 'v', interval=0.25)

#wait so screen stays up for 10 seconds
time.sleep(10)
