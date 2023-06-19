import axios from "./axios.js";

export const getIncomesRequest = () => axios.get("/get-incomes");
export const addIncomeRequest = (data) => axios.post("/add-income", data);
export const deleteIncomeRequest = (id) => axios.delete(`/delete-income/${id}`);
