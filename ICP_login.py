import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time
import pygsheets
import pyautogui


#Calculate two weeks from todays date for class list report



#screensize for autogui
screenWidth, screenHeight = pyautogui.size()


#Auth
client = pygsheets.authorize(service_account_file="python-368100-60c4ae6bb5dd.json")


#Select Spreadsheet and Worksheet
spreadsht = client.open("PF Office Hub - Fall 2022")
worksht = spreadsht.worksheet("title", "Class List Report")


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
#need to write the date code so it gets the correct date
pyautogui.write('12/21/2022', interval=0.25)
pyautogui.press('esc')
pyautogui.moveTo(400, 300)
pyautogui.drag(0, 400, 2, button='middle')
pyautogui.click(300,900)
time.sleep(20)
pyautogui.click(700,430)
#Still need to select everything and add it to clipboard

#wait so screen stays up
time.sleep(100)
