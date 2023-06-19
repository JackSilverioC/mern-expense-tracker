import { dashboard, expenses, transactions, trend } from "./Icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard"
  },
  {
    id: 2,
    title: "Ingresos",
    icon: trend,
    link: "/dashboard"
  },
  {
    id: 3,
    title: "Egresos",
    icon: expenses,
    link: "/dashboard"
  }
];
