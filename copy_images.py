import shutil
import os

src_logo = r"c:\Users\gace2\Desktop\VELICHAM\velicham\logo.jpg"
src_home = r"c:\Users\gace2\Desktop\VELICHAM\velicham\ban1.jpg"
src_summer = r"c:\Users\gace2\Desktop\VELICHAM\velicham\ban 2.jpg"
src_kids = r"c:\Users\gace2\Desktop\VELICHAM\velicham\ban 3.jpg"
dst_folder = r"c:\Users\gace2\Desktop\VELICHAM\velicham\frontend\public"

os.makedirs(dst_folder, exist_ok=True)

shutil.copy(src_logo, os.path.join(dst_folder, "logo.jpg"))
shutil.copy(src_home, os.path.join(dst_folder, "home.jpg"))
shutil.copy(src_summer, os.path.join(dst_folder, "summer-camp.jpg"))
shutil.copy(src_kids, os.path.join(dst_folder, "kids-at-velicham.jpg"))

print("Images copied successfully!")
print(os.listdir(dst_folder))
