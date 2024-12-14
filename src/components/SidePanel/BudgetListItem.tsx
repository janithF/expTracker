import { Budget } from "../../types/interfaces";

interface Props {
  budget: Budget;
  selectedBudget: Budget;
  onSelectBudget: (budget: Budget) => void;
}

const BudgetListItem = ({ budget, selectedBudget, onSelectBudget }: Props) => {
  return (
    <div
      id={`budget-${budget.id}`}
      className={`py-2 px-3 border rounded-[10px] mb-3 cursor-pointer ${
        budget.id == selectedBudget.id ? "bg-secondary text-primary border-primary" : "border-gray-200 text-gray"
      }`}
      onClick={() => onSelectBudget(budget)}
    >
      <h3 className="font-medium">{budget.title}</h3>
    </div>
  );
};

export default BudgetListItem;