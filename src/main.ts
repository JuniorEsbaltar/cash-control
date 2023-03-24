import { Calendar } from "./Calendar";
import { Expense } from "./Expense";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseService } from "./expenseService";
import "./style.css";

const createBtn = document.getElementById("create") as HTMLButtonElement;

class CashControl {

  calendar: Calendar = new Calendar(this.refreshCallback);
  expenseService = new ExpenseService();
  expense: Expense = new Expense(this.calendar, this.expenseService);
  expenseForm = new ExpenseForm(this.calendar);

  constructor() {}
  refreshCallback() {
    // console.log(this.expense);
    this.getAll();
    // this.expense.getByMonthAndYear();
  }

  getAll() {
    console.log('called');
  }

  bootstrap() {
    console.log('here');
    createBtn.onclick = () => {
      const newExpense = this.expenseForm.onAddExpense();
      this.expense.addExpense(newExpense);
    };
  }
  
}

new CashControl().bootstrap();
