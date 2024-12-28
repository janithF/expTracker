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
        budget.id == selectedBudget.id
          ? "bg-[#1E5E54] text-[#FFFF] border-[#28A092]"
          : "bg-[#3C8D83] text-[#D0EDE9] border-[#2F8076] hover:bg-[#469A90] hover:text-[#FFFFFF] hover:border-[#3C8D83]"
      }`}
      onClick={() => onSelectBudget(budget)}
    >
      <h3 className="font-medium">{budget.title}</h3>
    </div>
  );
};

export default BudgetListItem;
