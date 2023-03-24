import { IExpense } from "./IExpense";

export class ExpenseService {
  private _expenses: IExpense[] = [];

  getByMonthAndYear(month: number, year: number): IExpense[] {
    return this._expenses.filter((expense) => {
      return expense.date.getMonth() === month && expense.date.getFullYear() === year;
    });
  }

  addNew(expense: IExpense) {
    this._expenses.push(expense);
  }
}