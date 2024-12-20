"""empty message

Revision ID: 70ecd79a50e3
Revises: 
Create Date: 2024-12-16 05:11:53.846378

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '70ecd79a50e3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('card',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('lastLevel', sa.String(length=100), nullable=False),
    sa.Column('front', sa.String(length=250), nullable=False),
    sa.Column('back', sa.String(length=250), nullable=False),
    sa.Column('content', sa.String(length=250), nullable=True),
    sa.Column('picture', sa.String(length=250), nullable=True),
    sa.Column('daysLastView', sa.Integer(), nullable=False),
    sa.Column('study', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.Date(), nullable=False),
    sa.Column('updatedAt', sa.Date(), nullable=True),
    sa.Column('nextView', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('card')
    # ### end Alembic commands ###
