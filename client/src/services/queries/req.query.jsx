import { getAllPatient, getProfileById } from "../api/req.api";
import { useQuery } from "react-query";

// Patients
export const AllPatient = () => {
  return useQuery(["patients"], getAllPatient);
};

export const ProfileById = (userId) => {
  return useQuery(["profile", userId], getProfileById(userId));
};
