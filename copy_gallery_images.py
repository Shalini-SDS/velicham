import shutil
import os

source_dir = r"c:\Users\gace2\Desktop\VELICHAM\velicham"
dest_dir = r"c:\Users\gace2\Desktop\VELICHAM\velicham\backend\uploads"

os.makedirs(dest_dir, exist_ok=True)

images = [
    ("ban1.jpg", "ban1.jpg"),
    ("ban 2.jpg", "ban2.jpg"),
    ("ban 3.jpg", "ban3.jpg"),
    ("ban 4.jpg", "ban4.jpg"),
]

for src_name, dst_name in images:
    src_path = os.path.join(source_dir, src_name)
    dst_path = os.path.join(dest_dir, dst_name)
    if os.path.exists(src_path):
        shutil.copy(src_path, dst_path)
        print(f"Copied {src_name} -> {dst_name}")
    else:
        print(f"Source not found: {src_name}")

print(f"Files in uploads: {os.listdir(dest_dir)}")
