import React from "react";
import { Budget } from "../types/interfaces";

interface Props {
  budget: Budget;
}

const MainContent = ({ budget }: Props) => {
  return <h2>{budget.title}</h2>;
};

export default MainContent;
