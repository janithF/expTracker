import BudgetViewHeader from "./BudgetViewHeader";
import BudgetSummary from "./BudgetSummary";
import DetailTabs, { DetailTab } from "../UIComponents/DetailTabs";
import TransactionsList from "./TransactionsList";

const MainContent = () => {
  const tabList: DetailTab[] = [
    {
      id: 0,
      title: "All Transactions",
      children: <TransactionsList type="all" />,
    },
    {
      id: 1,
      title: "Expenses",
      children: <TransactionsList type="expense" />,
    },
    {
      id: 2,
      title: "Incomes",
      children: <TransactionsList type="income" />,
    },
  ];
  return (
    <>
      <BudgetViewHeader />
      <BudgetSummary />
      <div className="mt-4">
        <DetailTabs tabs={tabList} />
      </div>
    </>
  );
};

export default MainContent;
