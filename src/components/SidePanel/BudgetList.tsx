import { Budget } from "../../types/interfaces";
import BudgetListItem from "./BudgetListItem";
import { FaCoins } from "react-icons/fa6";
import SidepanelTitle from "./SidepanelTitle";

interface Props {
  budgetList: Budget[];
  selectedBudget: Budget;
  onSelectBudget: (budget: Budget) => void;
}

const BudgetList = ({ budgetList, onSelectBudget, selectedBudget }: Props) => {
  return (
    <div id="budget-list" className="w-full pt-5 mt-5 border-0 border-t ">
      <SidepanelTitle icon={<FaCoins />} title="Budget List" />
      {budgetList.map((budget) => {
        return <BudgetListItem key={budget.id} budget={budget} selectedBudget={selectedBudget} onSelectBudget={onSelectBudget} />;
      })}
    </div>
  );
};

export default BudgetList;
