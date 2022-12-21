from api.v1.views import app_views
from models import storage
from api.v1.views import app_views
from flask import request, abort, make_response, jsonify
# from  api.utils import verifyDetails, hashPassword
from models.patient_details import PatientDetails
from models.doctor_report import DoctorReport

@app_views.route("/allPatientRecord", methods=["GET"])
def allPatientRecord():
    obj = [{"file_no": "details",
    "Record": [{"doctors": "doctor", "nurse": "nurse", "lab": "labs", "chemist": "chemist"}]}]
    records = storage.session.query(PatientDetails).all()
    # print(records)
    for record in records:
        if len(record.doctorRecord) > 0:
            print("Yes")
        print(record.to_dict())
    return ("yes")
    pass
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
    new["nurse_id"] = details.get("nurse_id")

    """Check if the request contains the field doctor_id and patient_id"""
    if not new["doctor_id"] or not new["nurse_id"]:
        abort(400)
    
    """Check if the doctor_id and patient_id are valid in the database and if doctor record exit"""
    try:
        obj["class_"] = new["nurse_id"].split(".")[0]
        obj["obj"] = {"id": new["nurse_id"]}
        doc_id = storage.get_one(**obj)

        obj["class_"] = new["doctor_id"].split(".")[0]
        obj["obj"] = {"id": new["doctor_id"]}
        pat_id = storage.get_one(**obj)

        obj["class_"] = "DoctorReport"
        obj["obj"] = {"nurse_id": new["nurse_id"]}
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
    # lis = storage.get_all("DoctorReport")
    # if not lis:
    #     abort(404)
    lis = storage.session.query(PatientDetails).all()
    # lis = storage.session.query(PatientDetails, DoctorReport)
    # for row in lis:
    #     print (row[1].doctor_id)
    print(lis[0].doctorRecord) 
    return ("yes")

def singlePatientRecord():
    pass

def editPatientRecord():
    pass