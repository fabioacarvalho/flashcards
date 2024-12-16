"""empty message

Revision ID: 90f7f511db91
Revises: 5a6e2a86003d
Create Date: 2024-12-16 20:49:10.782578

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '90f7f511db91'
down_revision = '5a6e2a86003d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('card', schema=None) as batch_op:
        batch_op.alter_column('daysLastView',
               existing_type=mysql.INTEGER(),
               nullable=True)
        batch_op.alter_column('created_at',
               existing_type=sa.DATE(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('card', schema=None) as batch_op:
        batch_op.alter_column('created_at',
               existing_type=sa.DATE(),
               nullable=False)
        batch_op.alter_column('daysLastView',
               existing_type=mysql.INTEGER(),
               nullable=False)

    # ### end Alembic commands ###
