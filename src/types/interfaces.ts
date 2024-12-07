export interface Budget {
  id: number;
  title: string;
  paymentOptionsList: PaymentOption[];
  incomesList:Income[],
  expensesList:Expense[]
}

export interface PaymentOption {
  id: number;
  title: string;
  amount: number;
}

export interface Income {
  id: number;
  description: string;
  amount: number;
  date: Date;
  depositeLocationId: number;
}

export interface Expense {
  id: number;
  description: string;
  amount: number;
  date: Date;
  categoryId: number;
  paymentOptionId: number;
}

export interface Category {
  id: number;
  title: string;
}
