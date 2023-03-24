import { IExpense } from "./IExpense";

export class ExpenseService {
  private expenses: IExpense[] = [
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

  getAll(): IExpense[] {
    return this.expenses;
  }

  getByMonthAndYear(month: number, year: number): IExpense[] {
    // console.log(month, year)
    // console.log(this.expenses[0].date.getMonth());
    // console.log(this)
    console.log(this.expenses);
    return this.expenses.filter((expense) => {
      return expense.date.getMonth() === month && expense.date.getFullYear() === year;
    });
  }

  addNew(expense: IExpense) {
    this.expenses.push(expense);
  }
}