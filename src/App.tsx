import { useState } from "react";
import MainContent from "./components/MainContent";
import SidePanel from "./components/SidePanel";
import budgetList from "./data/budgetlist";
import { Budget } from "./types/interfaces";

function App() {
  const [selectedBudget, setSelectedBudget] = useState<Budget>(budgetList[0]);

  return (
    <div id="expense-tracker" className="flex h-full border bg-background border-gray-100 border-solid rounded-[25px]">
      <div className="w-[300px]  rounded-l-[25px] py-[5px] px-[12px]">
        <SidePanel budgetList={budgetList} selectedBudget={selectedBudget} onSelectBudget={(budget) => setSelectedBudget(budget)} />
      </div>
      <div className="flex-1 rounded-[25px] py-[5px] px-[12px] bg-white">
        <MainContent budget={selectedBudget}/>
      </div>
    </div>
  );
}

export default App;
