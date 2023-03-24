import { Calendar } from "./Calendar";
import { ExpenseService } from "./expenseService";
import { IExpense } from "./IExpense";
import { moneyFormat } from "./utils/money-format";

export class Expense {
  private _expensesContainer: HTMLElement;
  private _expenseService: ExpenseService;
  private _calendar: Calendar;

  constructor(calendar: Calendar) {
    this._calendar = calendar;
    this._expenseService = new ExpenseService();
    this._expensesContainer = document.getElementById(
      "expenses"
    ) as HTMLElement;

    this.getByMonthAndYear();
  }

  private _cleanAllByLiTree() {
    this._expensesContainer.innerHTML = "";
  }


  private _renderExpenseLi(expense: IExpense) {
    const newExpense = document.createElement("li");
    newExpense.innerHTML = `<span>${expense.name}</span> <span>${moneyFormat(
      expense.price
    )}</span>`;
    return newExpense;
  }

  private _appendOnTree(expense: IExpense) {
    this._expensesContainer.appendChild(this._renderExpenseLi(expense));
  }

  getByMonthAndYear() {
    this._cleanAllByLiTree();
    const expenses = this._expenseService.getByMonthAndYear(
      this._calendar.getCurrentDate().getMonth(),
      this._calendar.getCurrentDate().getFullYear()
    );

    expenses.forEach((expense) => {
      this._appendOnTree(expense);
    });
  }

  addExpense(expense: IExpense) {
    this._expenseService.addNew(expense);
    this._appendOnTree(expense);
  }
}
