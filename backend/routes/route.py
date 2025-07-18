from flask import Flask
from models.user_model import UserModel
from flask import request,jsonify,Blueprint
db=UserModel()
user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/all')
def all():
    users= db.user_getall_model()
    return jsonify(users)
@user_bp.route('/add',methods=['post'])
def add():
    data=request.get_json()
    return db.user_add_one(data)
@user_bp.route('/update/user',methods=['PUT'])
def update():
    data=request.get_json()
    return db.user_update_one(data)
@user_bp.route('/delete/user/<id>',methods=['DELETE'])
def delete(id):
    return db.delete_one(id)
    