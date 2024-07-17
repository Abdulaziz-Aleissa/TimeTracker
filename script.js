document.querySelectorAll(".time-input").forEach((input) => {
  input.addEventListener("input", (event) => {
    const value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    if (value.length === 1) {
      event.target.value = value + ":";
    } else if (value.length > 1 && !value.includes(":")) {
      event.target.value = value.slice(0, 1) + ":" + value.slice(1);
    }
  });
});

function calculateTime() {
  const timeInputs = [
    document.getElementById("time1").value,
    document.getElementById("time2").value,
    document.getElementById("time3").value,
    document.getElementById("time4").value,
    document.getElementById("time5").value,
  ];

  let totalMinutes = 0;

  timeInputs.forEach((time) => {
    if (time) {
      if (time.includes(":")) {
        // If the input is in "hh:mm" format
        const [hours, minutes] = time.split(":").map(Number);
        totalMinutes += hours * 60 + minutes;
      } else {
        // If the input is just hours
        const hours = Number(time);
        totalMinutes += hours * 60;
      }
    }
  });

  const totalHours = totalMinutes / 60;
  const remainingHours = 40 - totalHours;
  const remainingHoursInt = Math.floor(remainingHours);
  const remainingMinutes = Math.round(
    (remainingHours - remainingHoursInt) * 60
  );

  document.getElementById(
    "result"
  ).innerText = `Remaining time: ${remainingHoursInt} hours and ${remainingMinutes} minutes`;

  // Calculate Thursday leave time
  const thursdayEntry = document.getElementById("thursdayEntry").value;
  if (thursdayEntry) {
    const [entryHours, entryMinutes] = thursdayEntry.split(":").map(Number);
    const remainingTotalMinutes = remainingHoursInt * 60 + remainingMinutes;
    const leaveTotalMinutes =
      entryHours * 60 + entryMinutes + remainingTotalMinutes;
    const leaveHours = Math.floor(leaveTotalMinutes / 60);
    const leaveMinutesRemainder = leaveTotalMinutes % 60;
    document.getElementById(
      "thursdayResult"
    ).innerText = `You can leave on Thursday at: ${leaveHours}:${
      leaveMinutesRemainder < 10 ? "0" : ""
    }${leaveMinutesRemainder}`;
  } else {
    document.getElementById("thursdayResult").innerText = "";
  }
}
