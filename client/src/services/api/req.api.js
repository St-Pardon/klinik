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
  return axios.get(`${BaseURI}/patient/all-profile`).then((res) => res.data);
};

// export const getPatientRecords = () => {
//   axios
//     .get(`${BaseURI}/records`)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };
// export const getPatientRecordById = (recordId) => {
//   axios
//     .get(`${BaseURI}/records/${recordId}`)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// // staff
// export const getStaffById = (staffId) => {
//   axios
//     .get(`${BaseURI}/records/${staffId}`)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };
