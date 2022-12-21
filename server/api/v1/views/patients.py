from api.v1.views import app_views
from models import storage
from flask import request, abort, make_response, jsonify
from datetime import datetime
from  api.utils import verifyDetails, hashPassword
# from models.patient_details import PatientDetails



@app_views.route('/regpatient', methods=["POST"])
def regpatient():
    """Register a patient to the database"""
    class_ = "PatientDetails"
    details = request.get_json()
    new = {}
    new["first_name"] = details.get("first_name")
    new["last_name"] = details.get("last_name")
    new["email"] = details.get("email")
    new["address"] = details.get("address")
    new["phone"] = details.get("phone")
    new["file_no"] = details.get("file_no")
    new["password"] = hashPassword(details.get("first_name"))
    check = verifyDetails(new)
    obj = {"class_": class_, "obj": {"file_no": new.get("file_no")}}
    data = storage.get_one(**obj)
    if not check or data != None:
        abort(400)
    obj["obj"] = new
    patient = storage.new(**obj)
    new["created_at"] = patient.created_at
    new["updated_at"] = patient.updated_at
    new["id"] = patient.id
    del new["password"]
    return (make_response(jsonify(new)), 201)


@app_views.route("/allpatientprofile", methods=["GET"])
def allPatientProfile():
    """Get all Patient profile Details"""
    lis = storage.get_all("PatientDetails")
    if not lis:
        abort(404)
    return (make_response(jsonify(lis), 200))


