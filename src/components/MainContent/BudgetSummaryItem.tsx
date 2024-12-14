import { orange } from "@mui/material/colors";
import { ReactNode } from "react";

interface Props {
  color: Color;
  amount: number;
  currency: string;
  title: string;
  icon: ReactNode;
}
type Color = "green" | "red" | "orange" | "yellow";

const BudgetSummaryItem = ({ title, icon, amount, color, currency }: Props) => {
  const colorClasses = {
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-600",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
  };

  const classes = colorClasses[color];
  return (
    <div className="h-full flex items-center">
      <div className={`w-[70px] h-[70px] rounded-full ${classes.bg} flex justify-center items-center mr-3`}>
        <div className={`text-[40px] ${classes.text} font-bold`}>{icon}</div>
      </div>
      <div>
        <h3 className="font-bold text-2xl">
          {currency} {amount}
        </h3>
        <span className="text-base">{title}</span>
      </div>
    </div>
  );
};

export default BudgetSummaryItem;
