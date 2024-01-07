"""empty message

Revision ID: 3f51726aff78
Revises: 
Create Date: 2024-01-06 20:02:24.361517

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f51726aff78'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.Column('category', sa.String(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('genre', sa.String(), nullable=True),
    sa.Column('isTrending', sa.Boolean(), nullable=True),
    sa.Column('trending_image_small', sa.String(), nullable=True),
    sa.Column('trending_image_large', sa.String(), nullable=True),
    sa.Column('regular_image_small', sa.String(), nullable=True),
    sa.Column('regular_image_medium', sa.String(), nullable=True),
    sa.Column('regular_image_large', sa.String(), nullable=True),
    sa.Column('clicks', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('date_of_birth', sa.String(), nullable=True),
    sa.Column('profile_picture', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('preferred_genre', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('viewing_history',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.Column('genre1_counter', sa.Integer(), nullable=True),
    sa.Column('genre2_counter', sa.Integer(), nullable=True),
    sa.Column('genre3_counter', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['movie_id'], ['movies.id'], name=op.f('fk_viewing_history_movie_id_movies')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_viewing_history_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('watchlists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.Column('added_at', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['movie_id'], ['movies.id'], name=op.f('fk_watchlists_movie_id_movies')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_watchlists_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('watchlists')
    op.drop_table('viewing_history')
    op.drop_table('users')
    op.drop_table('movies')
    # ### end Alembic commands ###
