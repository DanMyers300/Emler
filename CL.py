import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time
import pyautogui

#screensize for autogui
screenWidth, screenHeight = pyautogui.size()

driver = webdriver.Chrome()

#Open total enrollment list
driver.get('https://docs.google.com/spreadsheets/d/14_XGatuxZ5vjmSlYqHTaI-GDKzGh0BFdKA7j0ObrhbM/edit#gid=0')
g_id_box = driver.find_element('name', 'identifier')
g_id_box.send_keys('prestonforest@emlerswimschool.com')
pyautogui.click(635,730)
time.sleep(2)
g_pass_box = driver.find_element('name', 'Passwd')
g_pass_box.send_keys('iswimemler')

#wait so screen stays up
time.sleep(100)
