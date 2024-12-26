import { createContext } from "react";
import { Budget } from "../types/interfaces";

const BudgetContext = createContext<Budget | null>(null);

export { BudgetContext };
