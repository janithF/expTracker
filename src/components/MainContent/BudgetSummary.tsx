import { IoTrendingUp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";
import { FaBalanceScaleRight } from "react-icons/fa";
import { Divider } from "@mui/material";
import BudgetSummaryItem from "./BudgetSummaryItem";

const BudgetSummary = () => {
  return (
    <div className="h-[100px] w-full border border-gray-200 rounded-lg py-[5px] px-[30px] flex items-center justify-between">
      <BudgetSummaryItem icon={<IoTrendingUp />} amount={50000} color="green" currency="LKR" title="Total Income" />
      <Divider orientation="vertical" variant="middle" flexItem />
      <BudgetSummaryItem icon={<FaWallet />} amount={20000} color="red" currency="LKR" title="Total Expenses" />
      <Divider orientation="vertical" variant="middle" flexItem />
      <BudgetSummaryItem icon={<FaBalanceScaleRight />} amount={30000} color="yellow" currency="LKR" title="Balance Available" />
    </div>
  );
};

export default BudgetSummary;
