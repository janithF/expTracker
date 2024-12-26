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
      bg: "bg-green-50",
      text: "text-green-500",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-500",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
  };

  const classes = colorClasses[color];
  return (
    <div className="h-full flex items-center">
      <div
        className={`w-[70px] h-[70px] rounded-full ${classes.bg} flex justify-center items-center mr-3`}
      >
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
