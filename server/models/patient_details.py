import models
from models.base_model import BaseModel, Base
from models.nurse_report import NurseReport
import sqlalchemy
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer
from sqlalchemy.orm import relationship


class PatientDetails(BaseModel, Base):
    """Patient Details """
    __tablename__ = "patientDetails"
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(120), nullable=False)
    address = Column(Text, nullable=False)
    phone = Column(String(30), nullable=False)
    file_no = Column(String(80), nullable=False)
    password = Column(String(80), nullable=False)
    nurse_report = relationship("NurseReport",
                              backref="patient",
                              cascade="all, delete, delete-orphan")
    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)