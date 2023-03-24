import { Expense } from "./IExpense";

export class ExpenseService {
  private expenses: Expense[] = [
    {
      name: "test",
      price: 20,
      date: new Date(),
      isRecursive: false,
    },
    {
      name: "test",
      price: 20,
      date: new Date(),
      isRecursive: false,
    },
    {
      name: "test",
      price: 20,
      date: new Date(),
      isRecursive: false,
    },
    {
      name: "test",
      price: 20,
      date: new Date(),
      isRecursive: false,
    },
  ];

  getAll(): Expense[] {
    return this.expenses;
  }

  getByMonthAndYear(month: number, year: number): Expense[] {
    return this.expenses.filter((expense) => {
      return expense.date.getMonth() === month && expense.date.getFullYear() === year;
    });
  }

  addNew(expense: Expense) {
    this.expenses.push(expense);
  }
}