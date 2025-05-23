import api from "./apiClient";
import { CourseItem, CourseMaterial, Quiz } from "../types";

export const getItemsByCourse = async (
  courseId: number
): Promise<(CourseMaterial | Quiz)[]> => {
  const res = await api.get<(CourseMaterial | Quiz)[]>(
    `/items/course/${courseId}`
  );
  return res.data;
};

export const getItem = async (
  itemId: number
): Promise<CourseMaterial | Quiz> => {
  const res = await api.get<CourseMaterial | Quiz>(`/items/${itemId}`);
  return res.data;
};

export const deleteItem = async (itemId: number): Promise<any> => {
  const res = await api.delete(`/items/${itemId}`);
  return res.data;
};

export const updateItem = async (
  itemId: number,
  item: CourseMaterial | Quiz
): Promise<CourseMaterial | Quiz> => {
  const { itemId: _itemId, ...rest } = item;
  const payload = { ...rest, itemId: null };
  const res = await api.put<CourseMaterial | Quiz>(`/items/${itemId}`, payload);
  return res.data;
};
