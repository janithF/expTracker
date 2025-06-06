import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { Transaction } from "../../types/interfaces";
import { categoryColors } from "../../data/categories";

interface Props {
  transaction: Transaction;
}
interface CategoryLabelProps {
  slug: string;
  title: string;
}
const CategoryLabel = ({ slug,title }: CategoryLabelProps) => {
  const categoryMap: { [key: string]: string } = { ...categoryColors };
  return (
    <div className="flex justify-center items-center">
      <span className="text-[12px] px-2 py-1 rounded-full text-white" style={{ background: categoryMap[slug] }}>
        {title}
      </span>
    </div>
  );
};

const TransactionItem = ({ transaction }: Props) => {
  return (
    <div className="w-full h-[50px] p-2 bg-white mb-2 shadow-md rounded-lg flex justify-between items-center">
      <div className="flex">
        <div className="w-6 flex items-center justify-center mr-2">
          {transaction.type === "income" ? <FaArrowUp color="green" size={"20px"} /> : <FaArrowDown color="red" size={"20px"} />}
        </div>
        <div className="leading-5 flex-1">
          <h3 className="font-medium m-0">{transaction.description}</h3>
          <div className="flex text-gray-500 items-center">
            <FaCalendar size={"12px"} className="mr-1" />
            <span className="text-[10px]">{transaction.date.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      {transaction.category && <CategoryLabel slug={transaction.category.slug} title={transaction.category.title}/>}
      <div className="leading-5 w-[100px]">
        <h3 className="font-medium m-0">LKR {transaction.amount}</h3>
        <div className="flex text-gray-500 items-center">
          <FaWallet size={"12px"} className="mr-1" />
          <span className="text-[10px]">{transaction.paymentOption?.title}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
