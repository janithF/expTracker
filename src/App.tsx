import MainContent from "./components/MainContent";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div id="expense-tracker" className="flex h-full border border-gray border-solid rounded-[16px]">
      <div className="w-[300px] bg-background rounded-l-[16px] p-[5px]">
        <SidePanel />
      </div>
      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
