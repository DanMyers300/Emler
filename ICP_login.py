import selenium
from selenium import webdriver
import time
import pygsheets
import pyautogui

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
