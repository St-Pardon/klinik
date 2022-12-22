from api.v1.views import app_views
from models import storage
from api.v1.views import app_views
from flask import request, abort, make_response, jsonify
# from  api.utils import verifyDetails, hashPassword
from models.patient_details import PatientDetails
from models.doctor_report import DoctorReport

@app_views.route("/allPatientRecord", methods=["GET"])
def allPatientRecord():
    records = storage.session.query(PatientDetails).all()
    # print(record[0].nurse_report[1].to_dict())
    new = {}
    lis = []
    obj = {}
    obj_lis = []
    count = 0
    for record in records:
        new[record.file_no] = {"details": record.to_dict()}
        for nurse in record.nurse_report:
            obj[count] = {}
            obj[count]["nurse_record"] = nurse.to_dict()
            if nurse.doctor_report:
                obj[count]["doctor_record"] = nurse.doctor_report.to_dict()
            else:
                obj[count]["doctor_record"] =  None
            if nurse.lab_report:
                obj[count]["lab_record"] = nurse.lab_report.to_dict()
            else:
                obj[count]["lab_record"] = None
            count += 1
            obj_lis.append(obj)
            del obj
            obj = {}
        new[record.file_no]["medical_reocrd"] = obj_lis
        lis.append(new)
        del obj_lis
        del new
        new = {}
        obj_lis = []
        count = 0
      
        
    return (jsonify(lis))
        
  

@app_views.route("/patient/record", methods=["POST"])
def createPatientRecord():
    obj = {}
    new = {}
    details = request.get_json()
    new["entry"] = details.get("entry")
    new["diagnosis"] = details.get("diagnosis")
    new["recommendation"] = details.get("recommendation")
    new["prescription"] = details.get("prescription")
    new["lab"] = details.get("lab")
    new["doctor_id"] = details.get("doctor_id")
    new["nurse_report"] = details.get("nurse_report")

    """Check if the request contains the field doctor_id and patient_id"""
    if not new["doctor_id"] or not new["nurse_report"]:
        abort(400)
    
    """Check if the doctor_id and patient_id are valid in the database and if doctor record exit"""
    try:
        obj["class_"] = new["nurse_report"].split(".")[0]
        obj["obj"] = {"id": new["nurse_report"]}
        doc_id = storage.get_one(**obj)

        obj["class_"] = new["doctor_id"].split(".")[0]
        obj["obj"] = {"id": new["doctor_id"]}
        pat_id = storage.get_one(**obj)

        obj["class_"] = "DoctorReport"
        obj["obj"] = {"nurse_report": new["nurse_report"]}
        record = storage.get_one(**obj)

        if not pat_id or not doc_id or record:
            abort(400)
    except:
        abort(400)

    """Save to database"""
    obj["obj"] = new
    obj["class_"] = "DoctorReport"
    record = storage.new(**obj)
    new["created_at"] = record.created_at
    new["updated_at"] = record.updated_at
    new["id"] = record.id
    return (jsonify(new), 201)
    
@app_views.route("/all", methods=["GET"])
def all():
    """Get all Patient profile Details"""
    
    return ("yes")

def singlePatientRecord():
    pass

def editPatientRecord():
    pass