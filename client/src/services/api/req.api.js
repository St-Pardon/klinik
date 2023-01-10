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
export const createStaff = (data) => {
  return axios.post(`${BaseURI}/regstaff`, data)
}

// create patient
export const createPatient = (data) => {
  return axios.post(`${BaseURI}/patient/register`, data)
}

// create patient
export const deleteUser = (userId) => {
  return axios.delete(`${BaseURI}/deleteprofile/${userId}`)
}

// edit user
export const editUser = (userId, data) => {
  console.log(userId, data)
  return axios.put(`${BaseURI}/updateprofile/${userId}`, data)
}