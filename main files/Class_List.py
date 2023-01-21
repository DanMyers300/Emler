import pygsheets
import time

# Authorize pygsheets using the JSON file
gc = pygsheets.authorize(service_file='python-368100-5f317bcc7d43.json')

# Open the source sheet
source_sheet = gc.open("Total Enrollment List - Fall 2022")

# Select the worksheet with the title "PF" in the source sheet
source_worksheet = source_sheet.worksheet_by_title("PF")

# Select all values from the source worksheet
source_values = source_worksheet.get_all_values()

# Open the destination sheet
destination_sheet = gc.open("PF Office Hub - Fall 2022")

# Select the worksheet with the title "Enrollment List" in the destination sheet
destination_worksheet = destination_sheet.worksheet_by_title("Enrollment List")

destination_worksheet.update_values('A1',source_values)

print('Success!')
time.sleep(10)
