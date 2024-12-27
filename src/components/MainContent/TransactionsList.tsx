import { useContext } from "react";
import { BudgetContext } from "../../context/budget";
import { Category, Expense, Income, PaymentOption, Transaction, TransactionType } from "../../types/interfaces";
import TransactionItem from "./TransactionItem";
import categoriesList from "../../data/categories";

interface Props {
  type: "all" | "income" | "expense";
}

const TransactionsList = ({ type }: Props) => {
  const budget = useContext(BudgetContext);

  const getCategory = (categoryId: number) => {
    const category = categoriesList.filter((category) => category.id == categoryId)[0];
    return category;
  };

  let displayList: Transaction[] = [];

  const updateDisplayList = (transList: Income[] | Expense[]): Transaction[] => {
    const displayList = transList.map((transaction) => {
      const { id, amount, description, date } = transaction;
      let paymentOption: PaymentOption | null = null;
      let type: TransactionType = "expense";
      let category: Category | null = null;

      if ("paymentOptionId" in transaction) {
        paymentOption = budget?.paymentOptionsList.filter((itm) => itm.id == transaction.paymentOptionId)[0] || null;
        type = "expense";
        category = getCategory(transaction.categoryId);
      } else if ("depositeLocationId" in transaction) {
        paymentOption = budget?.paymentOptionsList.filter((itm) => itm.id == transaction.depositeLocationId)[0] || null;
        type = "income";
      }

      const obj: Transaction = {
        id,
        description,
        amount,
        date,
        type,
        paymentOption,
      };
      if (category) {
        return { ...obj, category };
      }
      return obj;
    });
    return displayList;
  };

  if (budget?.incomesList && budget.expensesList) {
    switch (type) {
      case "expense":
        displayList = updateDisplayList(budget.expensesList);
        break;
      case "income":
        displayList = updateDisplayList(budget.incomesList);
        break;
      case "all":
        displayList = [...updateDisplayList(budget.expensesList), ...updateDisplayList(budget.incomesList)];
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {displayList?.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
