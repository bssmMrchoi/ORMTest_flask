from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://mrchoidb:qlqjs112!@localhost/class01?charset=utf8'
app.config['SQLALCHEMY_ECHO'] = True #삭제해도 될듯?
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'this is secret'

db = SQLAlchemy(app)
db.create_all()
