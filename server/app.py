from models import User, Movie, Watchlist, ViewingHistory
from flask import Flask, request, make_response, jsonify, session
from flask_restful import Resource
from config import db, app, Api
from sqlalchemy import asc


if __name__ == '__main__':
    app.run(port=5555, debug=True)