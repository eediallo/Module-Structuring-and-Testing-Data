function formatAs12HourClock(){} // does not return any value
console.assert(formatAs12HourClock("08:00") === "08:00 am")


console.assert(formatAs12HourClock("08:00") === "08:00 am",
    `Current output: ${formatAs12HourClock("08:00")}, target output: 08:00`
)