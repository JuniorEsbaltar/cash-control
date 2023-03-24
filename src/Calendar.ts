//Generate by chatgpt

export class Calendar {
  private readonly container: HTMLElement;
  private readonly prevMonthBtn: HTMLButtonElement;
  private readonly nextMonthBtn: HTMLButtonElement;
  private readonly monthYear: HTMLElement;
  private currentDate: Date;
  
  constructor(refreshCallback: () => void) {
    this.container = document.getElementById(
      "calendar-container"
    ) as HTMLElement;
    this.prevMonthBtn = this.container.querySelector(".prev-month-btn")!;
    this.nextMonthBtn = this.container.querySelector(".next-month-btn")!;
    this.monthYear = this.container.querySelector(".month-year")!;
    this.currentDate = new Date();

    this.render();

    this.prevMonthBtn.addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.render();
      refreshCallback();
    });

    this.nextMonthBtn.addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
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
      monthNames[this.currentDate.getMonth()] +
      " " +
      this.currentDate.getFullYear();
    this.monthYear.textContent = monthYearText;
  }

  getCurrentDate() {
    return this.currentDate;
  }
}
