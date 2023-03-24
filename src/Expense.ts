import { Calendar } from "./Calendar";
import { ExpenseService } from "./expenseService";
import { IExpense } from "./IExpense";
import { moneyFormat } from "./utils/money-format";

export class Expense {
  private _expensesContainer: HTMLElement;
  private _expenseService: ExpenseService;
  private _calendar: Calendar;

  constructor(calendar: Calendar, expenseService: ExpenseService) {
    this._calendar = calendar;
    this._expenseService = expenseService;
    this._expensesContainer = document.getElementById(
      "expenses"
    ) as HTMLElement;

    this.getByMonthAndYear();
  }

  cleanAllByLiTree() {
    this._expensesContainer.innerHTML = "";
  }
  getByMonthAndYear() {
    this.cleanAllByLiTree();
    console.log(this._calendar.getCurrentDate().getMonth());
    console.log(this._calendar.getCurrentDate().getFullYear());
    const expenses = this._expenseService.getByMonthAndYear(
      this._calendar.getCurrentDate().getMonth(),
      this._calendar.getCurrentDate().getFullYear()
    );
    console.log(expenses);
    expenses.forEach((expense) => {
      this.appendOnLiTree(expense);
    });
  }

  private renderExpenseLi(expense: IExpense) {
    const newExpense = document.createElement("li");
    newExpense.innerHTML = `<span>${expense.name}</span> <span>${moneyFormat(
      expense.price
    )}</span>`;
    return newExpense;
  }

  private appendOnLiTree(expense: IExpense) {
    this._expensesContainer.appendChild(this.renderExpenseLi(expense));
  }

  addExpense(expense: IExpense) {
    this._expenseService.addNew(expense);
    this.appendOnLiTree(expense);
  }
}
