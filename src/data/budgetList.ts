import { Budget } from "../types/interfaces";

const budgetList: Budget[] = [
  {
    id: 1,
    title: "Monthly Budget",
    paymentOptionsList: [
      { id: 1, title: "Bank Account", amount: 50000 },
      { id: 2, title: "Cash", amount: 10000 },
    ],
    incomesList: [
      { id: 1, description: "Salary", amount: 60000, date: new Date("2024-12-01"), depositeLocationId: 1 },
      { id: 2, description: "Freelance Work", amount: 10000, date: new Date("2024-12-05"), depositeLocationId: 2 },
    ],
    expensesList: [
      { id: 1, description: "Groceries", amount: 12000, date: new Date("2024-12-10"), categoryId: 1, paymentOptionId: 2 },
      { id: 2, description: "Rent", amount: 25000, date: new Date("2024-12-01"), categoryId: 2, paymentOptionId: 1 },
    ],
  },
  {
    id: 2,
    title: "Vacation Budget",
    paymentOptionsList: [{ id: 3, title: "Travel Card", amount: 20000 }],
    incomesList: [{ id: 3, description: "Savings Withdrawal", amount: 20000, date: new Date("2024-11-25"), depositeLocationId: 3 }],
    expensesList: [
      { id: 3, description: "Flight Tickets", amount: 15000, date: new Date("2024-12-15"), categoryId: 3, paymentOptionId: 3 },
      { id: 4, description: "Hotel Stay", amount: 4000, date: new Date("2024-12-20"), categoryId: 4, paymentOptionId: 3 },
    ],
  },
  {
    id: 3,
    title: "Weekly Budget",
    paymentOptionsList: [{ id: 4, title: "Wallet", amount: 5000 }],
    incomesList: [{ id: 4, description: "Gift Money", amount: 5000, date: new Date("2024-12-03"), depositeLocationId: 4 }],
    expensesList: [
      { id: 5, description: "Dining Out", amount: 2000, date: new Date("2024-12-07"), categoryId: 5, paymentOptionId: 4 },
      { id: 6, description: "Entertainment", amount: 1000, date: new Date("2024-12-08"), categoryId: 6, paymentOptionId: 4 },
    ],
  },
];

export default budgetList;
