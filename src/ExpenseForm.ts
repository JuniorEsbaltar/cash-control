import { Calendar } from "./Calendar";
import { IExpense } from "./IExpense";

export class ExpenseForm {
  private _nameInput: HTMLInputElement;
  private _priceInput: HTMLInputElement;
  private _calendar: Calendar;

  constructor(calendar: Calendar) {
    this._calendar = calendar;
    this._nameInput = document.getElementById("name") as HTMLInputElement;
    this._priceInput = document.getElementById("price") as HTMLInputElement;
  }

  onAddExpense(): IExpense {
    return {
      name: this._nameInput.value,
      price: Number(this._priceInput.value),
      date: this._calendar.getCurrentDate(),
      isRecursive: false,
    };
  }
}
