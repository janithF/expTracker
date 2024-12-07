import { Budget } from "../types/interfaces";
import BudgetListItem from "./BudgetListItem";

interface Props {
  budgetList: Budget[];
  selectedBudget: Budget;
  onSelectBudget: (budget: Budget) => void;
}

const BudgetList = ({ budgetList, onSelectBudget, selectedBudget }: Props) => {
  return (
    <div id="budget-list" className="w-full mt-10">
      {budgetList.map((budget) => {
        return <BudgetListItem key={budget.id} budget={budget} selectedBudget={selectedBudget} onSelectBudget={onSelectBudget} />;
      })}
    </div>
  );
};

export default BudgetList;
