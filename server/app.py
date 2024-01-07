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


class CheckSession(Resource):
    def get(self):
        client_user = User.query.filter(User.id == session.get('user_id')).first()

        if not client_user:
            return {'message': '401: Not Authorized'}, 401
        
        return client_user.to_dict()
    
class Users(Resource):
    def get(self):
        all_users = [user.to_dict() for user in User.query.all()]

        response = make_response(all_users, 200)

        return response

Api.add_resource(Users, '/users')

class Movies(Resource):
    def get(self):
        all_movies = [movie.to_dict() for movie in Movie.query.all()]

        response = make_response(all_movies, 200)

        return response

Api.add_resource(Movies, '/movies')

class Watchlists(Resource):
    def get(self):
        all_watchlists = [watchlist.to_dict() for watchlist in Watchlist.query.all()]

        response = make_response(all_watchlists, 200)

        return response

Api.add_resource(Watchlists, '/watchlists')

class ViewingHistories(Resource):
    def get(self):
        all_viewing_histories = [viewing_history.to_dict() for viewing_history in ViewingHistory.query.all()]

        response = make_response(all_viewing_histories, 200)

        return response

Api.add_resource(ViewingHistories, '/viewing_histories')


if __name__ == '__main__':
    app.run(port=5555, debug=True)