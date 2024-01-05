from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt
from datetime import datetime

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    passwordHash = db.Column(db.String, nullable=False)
    firstName = db.Column(db.String)
    lastName = db.Column(db.String)
    dateOfBirth = db.Column(db.datetime)
    profilePicture = db.Column(db.String)
    email = db.Column(db.String)
    preferredGenre = db.Column(db.String)
    
    viewingHistory = db.Column("ViewingHistory", back_populates="user") 
    watchlist = db.Column("Watchlist", back_populates="user")
