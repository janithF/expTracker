import React from "react";
import { Budget } from "../../types/interfaces";
import BudgetViewHeader from "./BudgetViewHeader";
import BudgetSummary from "./BudgetSummary";

interface Props {
  budget: Budget;
}

const MainContent = ({ budget }: Props) => {
  return (
    <>
      <BudgetViewHeader title={budget.title} />
      <BudgetSummary />
    </>
  );
};

export default MainContent;
