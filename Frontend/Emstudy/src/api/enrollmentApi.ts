import api from "./apiClient";
import { Enrollment } from "../types";

export const enrollInCourse = async (joinCode: string): Promise<Enrollment> => {
  const res = await api.get<Enrollment>(
    `/enrollments/enroll?joinCode=${joinCode}`
  );
  return res.data;
};

export const getEnrollmentById = async (
  enrollmentId: number
): Promise<Enrollment> => {
  const res = await api.get<Enrollment>(`/enrollments/${enrollmentId}`);
  return res.data;
};

export const getEnrollmentsByStudent = async (
  studentId: number
): Promise<Enrollment[]> => {
  const res = await api.get<Enrollment[]>(`/enrollments/students/${studentId}`);
  return res.data;
};

export const getEnrollmentsByCourse = async (
  courseId: number
): Promise<Enrollment[]> => {
  const res = await api.get<Enrollment[]>(`/enrollments/courses/${courseId}`);
  return res.data;
};

export const updateEnrollment = async (
  enrollmentId: number,
  enrollment: Enrollment
): Promise<Enrollment> => {
  const res = await api.put<Enrollment>(
    `/enrollments/${enrollmentId}`,
    enrollment
  );
  return res.data;
};

export const deleteEnrollment = async (enrollmentId: number): Promise<void> => {
  await api.delete(`/enrollments/${enrollmentId}`);
};

export const getAllEnrollments = async (): Promise<Enrollment[]> => {
  const res = await api.get<Enrollment[]>(`/enrollments`);
  return res.data;
};
