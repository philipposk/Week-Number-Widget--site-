function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function updateWeekNumber() {
  const now = new Date();
  const weekNumber = getWeekNumber(now);
  const year = now.getFullYear();

  const weekNumberElement = document.querySelector(".week-number");
  const weekYearElement = document.querySelector(".week-year");

  if (weekNumberElement) weekNumberElement.textContent = String(weekNumber);
  if (weekYearElement) weekYearElement.textContent = String(year);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

updateWeekNumber();
