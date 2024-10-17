// function formatAs12HourClock(){} // does not return any value
// console.assert(formatAs12HourClock("08:00") === "08:00 am")


// console.assert(formatAs12HourClock("08:00") === "08:00 am",
//     `Current output: ${formatAs12HourClock("08:00")}, target output: 08:00 am`
// )

function formatAs12HourClock(time){
    const isTimeGreaterThan12 = Number(time.slice(0, 2)) > 12 
    console.log(isTimeGreaterThan12) 
    return isTimeGreaterThan12 ? `${time.slice(0, 2) - 12}:00 pm` : `${time} am`
}

// first assertion
const currentOutput = formatAs12HourClock("08:00")
const targetOutput = "08:00 am"

console.assert(currentOutput === targetOutput, 
    `current output: ${currentOutput}, target output: ${targetOutput}`
)

// second assertion
const currentOutput2 = formatAs12HourClock("23:00")
const targetOutput2 = "11:00 pm"


console.assert(currentOutput2 === targetOutput2, 
    `current output: ${currentOutput2}, target output: ${targetOutput2}`
)

// third assertion
const currentOutput3 = formatAs12HourClock("14:00")
const targetOutput3 = "2:00 pm"

console.assert(currentOutput3 === targetOutput3, 
    `current output: ${currentOutput3}, target output: ${targetOutput3}`
)