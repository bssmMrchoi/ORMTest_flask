import User
from app import db

user = User.User('3','qqwe1we','qr1fewweqwed')
db.create_all()
db.session.add(user)
db.session.commit()

print(user)
print("---------------------")
print(user.as_dict())
