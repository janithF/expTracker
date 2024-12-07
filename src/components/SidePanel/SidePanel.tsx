import icon from "../../assets/img/logo/logo.svg";
import { Budget } from "../../types/interfaces";
import BudgetList from "./BudgetList";

interface Props {
  budgetList: Budget[];
  selectedBudget: Budget;
  onSelectBudget: (budget: Budget) => void;
}

const SidePanel = ({ budgetList, selectedBudget, onSelectBudget }: Props) => {
  return (
    <div id="sidepanel" className="flex flex-col items-center">
      <img src={icon} alt="icon" className="w-[250px]" />
      <BudgetList budgetList={budgetList} selectedBudget={selectedBudget} onSelectBudget={onSelectBudget} />
    </div>
  );
};

export default SidePanel;
