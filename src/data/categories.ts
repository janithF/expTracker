import { Category } from "../types/interfaces";

const categoriesList: Category[] = [
  { id: 1, slug: "utilities", title: "utilities" },
  { id: 2, slug: "transportation", title: "transportation" },
  { id: 3, slug: "foodAndDining", title: "food & dining" },
  { id: 4, slug: "housing", title: "housing" },
  { id: 5, slug: "groceries", title: "groceries" },
  { id: 6, slug: "health", title: "health" },
  { id: 7, slug: "entertainment", title: "entertainment" },
  { id: 8, slug: "personalCare", title: "personal care" },
  { id: 9, slug: "education", title: "education" },
  { id: 10, slug: "debtPay", title: "debtPay" },
  { id: 11, slug: "savings", title: "savings" },
  { id: 12, slug: "shopping", title: "shopping" },
  { id: 13, slug: "travel", title: "travel" },
  { id: 14, slug: "gifts", title: "gifts" },
  { id: 15, slug: "misc", title: "misc" },
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
