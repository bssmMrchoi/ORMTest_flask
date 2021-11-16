from app import db
from datetime import datetime

class User(db.Model):
    __tablename__ = 'login_user'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}    #한글인식

    userid = db.Column(db.String(30), primary_key=True)
    name = db.Column(db.String(30))
    password = db.Column(db.String(100))
    created = db.Column(db.DateTime)

    def __init__(self, userid, name, password):
        self.userid = userid
        self.name = name
        self.password = password
        self.created = datetime.now()

    #객체 출력했을 때 나오는 출력화면
    def __repr__(self):
        return 'userid : %s, name : %s, password : %s' % (self.userid, self.name, self.password)

    def as_dict(self):
        return {x.name: getattr(self, x.name) for x in self.__table__.columns}
