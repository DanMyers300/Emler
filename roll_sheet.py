import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time
import pyautogui
import pygsheets

#Authorize
gc = pygsheets.authorize(service_file='python-368100-5f317bcc7d43.json')

#Login to ICP
driver = webdriver.Chrome()
driver.get('https://app.iclasspro.com/a/emlerdallas')
id_box = driver.find_element('id', 'uname')
id_box.send_keys('dmyerspf')
pass_box = driver.find_element('id', 'passwd')
pass_box.send_keys('Emler123')
login_button = driver.find_element('id', 'loginbutton')
login_button.click()
driver.get('https://app.iclasspro.com/a/emlerdallas#!/report/classes/4')

#run the report
time.sleep(2)
pyautogui.click(400,550)
pyautogui.click(400,620)
pyautogui.drag(0, 400, 2, button='middle')
pyautogui.click(400,900)
time.sleep(30)
pyautogui.click(720,420)
time.sleep(2)
pyautogui.hotkey('ctrl', 'p', interval=0.25)
time.sleep(5)
pyautogui.click(800,710)
time.sleep(120)
pyautogui.hotkey('ctrl', 'p', interval=0.25)
time.sleep(5)
pyautogui.click(800,710)

