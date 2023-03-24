import { Calendar } from "./Calendar";
import { Expense } from "./Expense";
import { ExpenseForm } from "./ExpenseForm";
import "./style.css";

class CashControl {
  _calendar: Calendar = new Calendar(this.refreshCallback.bind(this));
  _expense: Expense = new Expense(this._calendar);
  _expenseForm = new ExpenseForm(this._calendar);

  constructor() {}
  refreshCallback() {
    this._expense.getByMonthAndYear();
  }

  bootstrap() {
    (document.getElementById("create") as HTMLButtonElement).onclick = () => {
      const newExpense = this._expenseForm.onAddExpense();
      this._expense.addExpense(newExpense);
    };
  }
}

new CashControl().bootstrap();
