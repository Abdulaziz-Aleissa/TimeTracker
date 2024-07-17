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
}
