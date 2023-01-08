import axios from "axios";

const BaseURI = "https://www.st-pardon.tech/api/v1";

// Patients
export const getProfileById = (userId) => {
  return axios.get(`${BaseURI}/getprofile/${userId}`).then((res) => res.data);
};

export const getAllPatient = () => {
  return axios.get(`${BaseURI}/patient/all-profile`).then((res) => res.data);
};

export const getAllStaff= () => {
  return axios.get(`${BaseURI}/allstaffprofile`).then((res) => res.data);
};

export const getPatientRecords = (userId) => {
  return axios.get(`${BaseURI}/patient/all-single-record/${userId}`).then((res) => res.data);
};

export const getDrugData= () => {
  return axios.get(`${BaseURI}/`).then((res) => res.data); //not complete
};


// create staff
export const createStaff = () => {
  return axios.post(`${BaseURI}/regstaff`, {Authentication: localStorage.getItem("jwt")})
}

// create patient
export const createPatient = () => {
  return axios.post(`${BaseURI}/patient/register`, {Authentication: localStorage.getItem("jwt")})
}

// create patient
export const deleteUser = (userId) => {
  return axios.post(`${BaseURI}/deleteprofile/${userId}`, {Authentication: localStorage.getItem("jwt")})
}