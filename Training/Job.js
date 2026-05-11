const time = [];

for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute++) {
    const h = String(hour).padStart(2, '0');
    const m = String(minute).padStart(2, '0');
    time.push(`${h}:${m}`);
  }
}

console.log(time);
