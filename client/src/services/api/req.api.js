import axios from "axios";

const BaseURI = "https://www.st-pardon.tech/api/v1";

// Patients routes
export const getPatientProfile = () => {
  axios
    .get(`${BaseURI}/profile`)
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const getPatientRecords = () => {
  axios
    .get(`${BaseURI}/records`)
    .then((data) => data)
    .catch((err) => console.log(err));
};
export const getPatientRecordById = (recordId) => {
  axios
    .get(`${BaseURI}/records/${recordId}`)
    .then((data) => data)
    .catch((err) => console.log(err));
};

// Doctor's Routes 
export const getStaffById = (staffId) => {
  axios
    .get(`${BaseURI}/records/${staffId}`)
    .then((data) => data)
    .catch((err) => console.log(err));
};