#from random import choice as rc, randrange

from app import app
from models import db, User, Movie, Watchlist, ViewingHistory

if __name__ == '__main__':
    with app.app_context():
        print("Clearing out database")
        User.query.delete()
        Movie.query.delete()
        Watchlist.query.delete()
        ViewingHistory.query.delete()

        print("Seeding User table")
        user1 = User (
            username = "funnymonkey556",
            _password_hash = "si1lyB4nana79!",
            first_name = "John",
            last_name = "Smith",
            date_of_birth = "09-17-1987",
            profile_picture = "profile_picture.jpg",
            email = "funnymonkey556@hotmail.com",
            preferred_genre = "",
        )

        db.session.add(user1)

        db.session.commit()

        db.session.add(user1)

        print("Seeding Movie table")

        movie1 = Movie (
            title = "Beyond Earth",
            year = 2019,
            category = "Movie",
            rating = "PG",
            genre = "Science Fiction",
            isTrending = True,
            trending_image_small = "trending_image_small.jpg",
            trending_image_large = "trending_image_large.jpg",
            regular_image_small = "regular_image_small.jpg",
            regular_image_medium = "regular_image_medium.jpg",
            regular_image_large = "regular_image_large.jpg",
            clicks = 0,
        )

        db.session.add(movie1)

        print("Seeding user watchlists")

        watchlists = [
            Watchlist(
                user_id = 1, 
                movie_id = 1,
                added_at = '', 
            )
        ]

        db.session.add_all(watchlists)

        print("Seeding user viewing history")

        viewing_histories = [
            ViewingHistory(
                user_id = 1,
                movie_id = 1,
                genre1_counter = 0,
                genre2_counter = 0,
                genre3_counter = 0,
            )
        ]

        db.session.add_all(viewing_histories)


        print("Data has now been successfully seeded")
        db.session.commit()
