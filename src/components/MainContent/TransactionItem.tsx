import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { Transaction } from "../../types/interfaces";

interface Props {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: Props) => {
  return (
    <div className="w-full h-[50px] p-2 bg-white mb-2 shadow-md rounded-lg flex justify-between">
      <div className="flex">
        <div className="w-6 flex items-center justify-center mr-2">
          {transaction.type === "income" ? <FaArrowUp color="green" size={"20px"} /> : <FaArrowDown color="red" size={"20px"} />}
        </div>
        <div className="leading-5">
          <h3 className="font-medium m-0">{transaction.description}</h3>
          <div className="flex text-gray-500 items-center">
            <FaCalendar size={"12px"} className="mr-1" />
            <span className="text-[10px]">{transaction.date.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
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
