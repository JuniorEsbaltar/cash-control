export class Calendar {
  private readonly _container: HTMLElement;
  private readonly _prevMonthBtn: HTMLButtonElement;
  private readonly _nextMonthBtn: HTMLButtonElement;
  private readonly _monthYear: HTMLElement;
  private _currentDate: Date;

  constructor(refreshCallback: () => void) {
    this._container = document.getElementById(
      "calendar-container"
    ) as HTMLElement;
    this._prevMonthBtn = this._container.querySelector(".prev-month-btn")!;
    this._nextMonthBtn = this._container.querySelector(".next-month-btn")!;
    this._monthYear = this._container.querySelector(".month-year")!;
    this._currentDate = new Date();

    this.render();

    this._prevMonthBtn.addEventListener("click", () => {
      this._currentDate.setMonth(this._currentDate.getMonth() - 1);
      this.render();
      refreshCallback();
    });

    this._nextMonthBtn.addEventListener("click", () => {
      this._currentDate.setMonth(this._currentDate.getMonth() + 1);
      this.render();
      refreshCallback();
    });
  }

  private render() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    
    const monthYearText =
      monthNames[this._currentDate.getMonth()] +
      " " +
      this._currentDate.getFullYear();
    this._monthYear.textContent = monthYearText;
  }

  getCurrentDate() {
    return this._currentDate;
  }
}
