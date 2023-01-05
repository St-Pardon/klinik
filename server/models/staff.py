import models
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, String,  Text, Boolean
from datetime import datetime

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
    sex = Column(String(10), nullable=False)
    next_of_kin = Column(String(80), nullable=False)
    next_of_kin_phone = Column(String(80), nullable=False)
    next_of_kin_address = Column(String(80), nullable=False)
    relationship = Column(String(80), nullable=False)
    status = Column(Boolean, default=False)

    count = 1

    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)
        # self.count += 1
        # self.reg_no = 'S' + str(datetime.today().year) + str(self.count)