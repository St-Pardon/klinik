import models
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer


class DoctorReport(BaseModel, Base):
    """Table for doctor Report"""
    __tablename__ = "doctorReport"
    entry = Column(Text, default=None)
    diagnosis = Column(Text, default=None)
    recommendation = Column(Text, default=None)
    prescription = Column(Text, default=None)
    doctor_id = Column(String(80), ForeignKey('staffDetails.id'), nullable=False)
    patient_id = Column(String(80), ForeignKey('patientDetails.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)