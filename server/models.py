from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt
from datetime import datetime
import os

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password_hash = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    date_of_birth = db.Column(db.datetime)
    profile_picture = db.Column(db.String)
    email = db.Column(db.String)
    preferred_genre = db.Column(db.String)
    
    viewing_history = db.relationship("ViewingHistory", back_populates="user") 
    watchlist = db.relationship("Watchlist", back_populates="user")

    serialize_rules = ('-viewing_history.user', '-viewing_history.user_id', '-watchlist.user', '-watchlist.user_id')

    @hybrid_property
    def password_hash(self):
        return self.password_hash

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self.password_hash, password.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self.password_hash, password.encode('utf-8')
        )
    
    @validates('email')
    def validate_email(self, key, email):
        if len(email) < 1 or '@' not in email:
            raise ValueError("You have not entered a valid email address. Please try again.")
        
        return email

    
    @validates('password_hash')
    def validate_password(self, key, password_hash):
        if not password_hash or len(password_hash) <= 6:
            raise ValueError("You must enter a password with 6 or more characters.")
        
        return password_hash

    @validates('profile_picture')
    def validate_profile_picture(self, key, profile_picture):
        allowed_extensions = {'.jpg', '.jpeg', '.png'}

        file_extension = os.path.splitext(profile_picture.lower())[1]

        if file_extension not in allowed_extensions:
            raise ValueError("File type not recognized. Accepted file extensions: .jpg, .jpeg, .png")
        
        return profile_picture
        


class Movie(db.Model, SerializerMixin):
    __tablename__ = "movies"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    year = db.Column(db.Integer)
    category = db.Column(db.String)
    rating = db.Column(db.String)
    isBookmarked = db.Column(db.Boolean, default=False)
    isTrending = db.Column(db.Boolean)
    trending_image_small = db.Column(db.String)
    trending_image_large = db.Column(db.String)
    regular_image_small = db.Column(db.String)
    regular_image_medium = db.Column(db.String)
    regular_image_large = db.Column(db.String)
    clicks = db.Column(db.Integer)

    viewing_history = db.relationship("ViewingHistory", back_populates="movie") 
    watchlist = db.relationship("Watchlist", back_populates="movie")

    serialize_rules = ('-viewing_history.movie', '-viewing_history.movie_id', '-watchlist.movie', '-watchlist.movie_id')


class Watchlist(db.Model, SerializerMixin):
    __tablename__ = "watchlists"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    added_at = db.Column(db.datetime, default=datetime.utcnow)

    user = db.relationship("User", back_populates="watchlist")
    movie = db.relationship("Movie", back_populates="watchlist")

    serialize_rules = ('-user.watchlist', '-movie.watchlist')
    
class ViewingHistory(db.Model, SerializerMixin):
    __tablename__ = "viewing_history"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
    previously_watched = db.Column(db.String)
    genre1_counter = db.Column(db.Integer)
    genre2_counter = db.Column(db.Integer)
    genre3_counter = db.Column(db.Integer)

    user = db.Column("User", back_populates="viewing_history")
    movie = db.Column("Movie", back_populates="viewing_history")

    serialize_rules = ('-user.viewing_history', '-movie.viewing_history')


