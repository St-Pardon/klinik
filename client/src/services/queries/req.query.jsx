import { getAllPatient, getAllStaff, getDrugData, getPatientRecords, getProfileById } from "../api/req.api";
import { useQuery } from "react-query";

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