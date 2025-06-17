function minDate(dates) {
  if (dates.length === 0) return "No dates provided.";
  return [...dates].sort()[0]; // Shallow copy to avoid modifying original array
}

function handleFindMinDate() {
  const input = document.getElementById("dateInput").value;
  const dateArray = input
    .split(',')
    .map(date => date.trim())
    .filter(date => /^\d{4}\/\d{2}\/\d{2}$/.test(date));  // Validate format

  if (dateArray.length === 0) {
    document.getElementById("result").textContent = "Please enter valid dates in YYYY/MM/DD format.";
    return;
  }

  const earliest = minDate(dateArray);
  document.getElementById("result").textContent = "Earliest Date: " + earliest;
}
