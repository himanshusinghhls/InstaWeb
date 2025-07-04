name = input("Enter your name: ")

while True:
    email = input("Enter your email: ")
    if "@" in email:
        break
    else:
        print("Invalid email.")

print(f"Received data: Name - {name}, Email - {email}")
