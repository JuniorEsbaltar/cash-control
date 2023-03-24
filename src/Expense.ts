import { Calendar } from "./Calendar";
import { ExpenseService } from "./expenseService";
import { IExpense } from "./IExpense";
import { moneyFormat } from "./utils/money-format";

export class Expense {
  private _expenses: IExpense[] = [];
  private _expensesContainer: HTMLElement;
  private _expenseService: ExpenseService;
  private _calendar: Calendar;

  constructor(calendar: Calendar, expenseService: ExpenseService) {
    this._calendar = calendar;
    this._expenseService = expenseService;
    this._expensesContainer = document.getElementById("expenses") as HTMLElement;

    this.getByMonthAndYear();
  }

  getByMonthAndYear() {
    this._expenseService.getByMonthAndYear(
      this._calendar.getCurrentDate().getMonth(),
      this._calendar.getCurrentDate().getFullYear()
    );
  }

  private renderExpenseLi(expense: IExpense) {
    const newExpense = document.createElement("li");
    newExpense.innerHTML = `<span>${expense.name}</span> <span>${moneyFormat(
      expense.price
    )}</span>`;
    return newExpense;
  }

  addExpense(expense: IExpense) {
    this._expenses.push(expense);

    this._expensesContainer.appendChild(this.renderExpenseLi(expense));
  }
}
