import os

for i in range(0,10):
    for j in range(0,10):
        d = str(i) + 'commit numer'
        with open('file.txt', 'a') as file:
            file.write(d)
        os.system('git add .')
        os.system('git commit -m "commit number' + d +'"')
os.system('git push')