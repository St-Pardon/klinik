import { createStaff, deleteUser, getAllPatient, getAllStaff, getDrugData, getPatientRecords, getProfileById } from "../api/req.api";
import { useQuery, useMutation } from "react-query";

// Patients
export const useAllPatient = () => {
  return useQuery(["patients"], getAllPatient);
};

export const useProfileById = (userId) => {
  return useQuery(["profile", userId], () => getProfileById(userId));
};

export const useAllStaff = () => {
  return useQuery(["staff"], getAllStaff);
}

export const usePatientRecord = (userId) => {
  return useQuery(["Patint-record", userId], () => getPatientRecords(userId));
};

export const useDrugData = () => {
  return useQuery(["staff"], getDrugData);
}

export const useCreateStaff = () => {
  return useMutation(createStaff)
}

export const UseDeleteUser = (userId) => {
  return useMutation(()=>{deleteUser(userId)})
}