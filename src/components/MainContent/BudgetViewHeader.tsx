import React, { useContext } from "react";
import AddNewMenu from "./AddNewMenu";
import { BudgetContext } from "../../context/budget";

const BudgetViewHeader = () => {
  const budget = useContext(BudgetContext);

  return (
    <div
      id="budget-view-header"
      className="flex items-center justify-between pt-[5px] pb-[10px] mt-[3px] mb-[15px] border-b border-gray-200"
    >
      <h1 className="text-[23px] font-bold text-primary">{budget?.title}</h1>
      <div>
        <AddNewMenu />
      </div>
    </div>
  );
};

export default BudgetViewHeader;
