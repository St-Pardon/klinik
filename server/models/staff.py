import models
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer

class Staff(BaseModel, Base):
    """Table for staff details"""
    __tablename__ = "staffDetails"
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(120), nullable=False)
    address = Column(Text, nullable=False)
    phone = Column(String(30), nullable=False)
    user_type = Column(String(20), nullable=False)
    licence_no = Column(String(80), nullable=False)
    user_role = Column(String(80), nullable=False)
    reg_no = Column(String(80), nullable=False)
    password = Column(String(80), nullable=False)


    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)