import { useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import SidePanel from "./components/SidePanel/SidePanel";
import budgetList from "./data/budgetList";
import { Budget } from "./types/interfaces";

function App() {
  const [selectedBudget, setSelectedBudget] = useState<Budget>(budgetList[0]);

  return (
    <div id="expense-tracker" className="flex h-full border bg-background border-gray-200 border-solid rounded-[25px] max-w-screen-2xl mx-auto">
      <div id="side-panel-container" className="w-[300px]  rounded-l-[25px] py-[5px] px-[12px]">
        <SidePanel budgetList={budgetList} selectedBudget={selectedBudget} onSelectBudget={(budget) => setSelectedBudget(budget)} />
      </div>
      <div id="main-container" className="flex-1 rounded-[25px] py-[5px] px-[20px] bg-white">
        <MainContent budget={selectedBudget}/>
      </div>
    </div>
  );
}

export default App;
