from models import User, Movie, Watchlist, ViewingHistory
from flask import Flask, request, make_response, jsonify, session
from flask_restful import Resource
from config import db, app, Api
from sqlalchemy import asc

class Login(Resource):

    def post(self):
        client_data = request.get_json()

        client_username = client_data['username']
        client_user = User.query.filter(User.username == client_username).first()

        client_password = client_data['password']

        if not client_user or not client_user.authenticate(client_password):
            return make_response({'error': 'Invalid username or password'}, 401)
        
        session['user_id'] = client_user.id
        return client_user.to_dict(), 200
    
Api.add_resource(Login, '/login')

class Logout(Resource):
    def post(self):
        session['user_id'] = None
        return '', 204
    
Api.add_resource(Logout, '/logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)