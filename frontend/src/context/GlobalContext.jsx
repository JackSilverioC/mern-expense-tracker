import { createContext, useContext, useState } from "react";
import {
  addIncomeRequest,
  deleteIncomeRequest,
  getIncomesRequest
} from "../api/income.js";

import {
  addExpenseRequest,
  deleteExpenseRequest,
  getExpensesRequest
} from "../api/expense.js";

const GlobalContext = createContext();

export const UseGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export const GlobalContextProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (data) => {
    try {
      const response = await addIncomeRequest(data);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getIncomes = async () => {
    try {
      const response = await getIncomesRequest();
      setIncomes(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const deleteIncome = async (id) => {
    try {
      const response = await deleteIncomeRequest(id);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const totalIncome = () => {
    return incomes.reduce((acc, income) => acc + income.amount, 0).toFixed(2);
  };

  //expenses

  const getExpenses = async () => {
    try {
      const response = await getExpensesRequest();
      setExpenses(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const addExpense = async (data) => {
    try {
      const response = await addExpenseRequest(data);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await deleteExpenseRequest(id);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const totalExpense = () => {
    return expenses
      .reduce((acc, expense) => acc + expense.amount, 0)
      .toFixed(2);
  };

  const totalBalance = () => {
    return (totalIncome() - totalExpense()).toFixed(2);
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    return history.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
        error,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
