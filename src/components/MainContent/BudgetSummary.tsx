import { IoTrendingUp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";
import { FaBalanceScaleRight } from "react-icons/fa";
import { Divider } from "@mui/material";
import BudgetSummaryItem from "./BudgetSummaryItem";
import { useContext } from "react";
import { BudgetContext } from "../../context/budget";

const BudgetSummary = () => {
  const budget = useContext(BudgetContext);

  const totalIncome = budget?.incomesList.reduce((total, income) => total + income.amount, 0);
  const totalExpenses = budget?.expensesList.reduce((total, income) => total + income.amount, 0);
  const balance = totalIncome && totalExpenses ? totalIncome - totalExpenses : 0;

  return (
    <div className="h-[100px] w-full border border-gray-200 rounded-lg py-[5px] px-[30px] flex items-center justify-between bg-white">
      <BudgetSummaryItem icon={<IoTrendingUp />} amount={totalIncome ?? 0} color="green" currency="LKR" title="Total Income" />
      <Divider orientation="vertical" variant="middle" flexItem />
      <BudgetSummaryItem icon={<FaWallet />} amount={totalExpenses ?? 0} color="red" currency="LKR" title="Total Expenses" />
      <Divider orientation="vertical" variant="middle" flexItem />
      <BudgetSummaryItem icon={<FaBalanceScaleRight />} amount={balance} color="yellow" currency="LKR" title="Balance Available" />
    </div>
  );
};

export default BudgetSummary;
