// function formatAs12HourClock(){} // does not return any value
// console.assert(formatAs12HourClock("08:00") === "08:00 am")


// console.assert(formatAs12HourClock("08:00") === "08:00 am",
//     `Current output: ${formatAs12HourClock("08:00")}, target output: 08:00 am`
// )

function formatAs12HourClock(time){
    return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00")
const targetOutput = "08:00 am"

console.assert(currentOutput === targetOutput, 
    `current output: ${currentOutput}, target output: ${targetOutput}`
)