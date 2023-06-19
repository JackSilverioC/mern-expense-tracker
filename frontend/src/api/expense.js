import axios from "./axios.js";

export const getExpensesRequest = () => axios.get("/get-expenses");
export const addExpenseRequest = (data) => axios.post("/add-expense", data);
export const deleteExpenseRequest = (id) =>
  axios.delete(`/delete-expense/${id}`);
