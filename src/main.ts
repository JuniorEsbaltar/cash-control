import { Calendar } from "./Calendar";
import { Expense } from "./Expense";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseService } from "./expenseService";
import { Injector } from "./Injector";
import "./style.css";

const createBtn = document.getElementById("create") as HTMLButtonElement;
const injector = new Injector([Calendar, ExpenseService]);

const expense = new Expense(
  injector._container.get(Calendar),
  injector._container.get(ExpenseService)
);
const expenseForm = new ExpenseForm(injector._container.get(Calendar));

createBtn.onclick = () => {
  const newExpense = expenseForm.onAddExpense();
  expense.addExpense(newExpense);
};
