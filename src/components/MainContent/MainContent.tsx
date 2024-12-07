import React from "react";
import { Budget } from "../../types/interfaces";
import BudgetViewHeader from "./BudgetViewHeader";

interface Props {
  budget: Budget;
}

const MainContent = ({ budget }: Props) => {
  return <BudgetViewHeader title={budget.title} />;
};

export default MainContent;
