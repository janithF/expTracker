import { Category } from "../types/interfaces";

const categoriesList: Category[] = [
  { id: 1, title: "utilities" },
  { id: 2, title: "transportation" },
  { id: 3, title: "foodAndDining" },
  { id: 4, title: "housing" },
  { id: 5, title: "groceries" },
  { id: 6, title: "health" },
  { id: 7, title: "entertainment" },
  { id: 8, title: "personalCare" },
  { id: 9, title: "education" },
  { id: 10, title: "debtPay" },
  { id: 11, title: "savings" },
  { id: 12, title: "shopping" },
  { id: 13, title: "travel" },
  { id: 14, title: "gifts" },
  { id: 15, title: "misc" },
];

export const categoryColors = {
  utilities: "#4ECDC4",
  transportation: "#36A2EB",
  foodAndDining: "#FF7043",
  housing: "#FF6F61",
  groceries: "#F7B801",
  health: "#8BC34A",
  entertainment: "#AB47BC",
  personalCare: "#FF8A65",
  education: "#3F51B5",
  debtPay: "#EF5350",
  savings: "#66BB6A",
  shopping: "#FFCA28",
  travel: "#FFA726",
  gifts: "#FFB74D",
  misc: "#607D8B",
};

export default categoriesList;
