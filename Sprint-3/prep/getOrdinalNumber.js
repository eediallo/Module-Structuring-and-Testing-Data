

function getOrdinalNumber(number){
    let ordinalNumber = ''
    const lastDigit = number.toString().slice(-1)
    const lastTwoDigits = number.toString().slice(-2)

    if (lastTwoDigits === "11" || lastTwoDigits === "12" || lastTwoDigits === "13"){
        ordinalNumber += number.toString() + 'th'
    } else {

        if (lastDigit ==='1'){
            ordinalNumber += number.toString() + 'st'
        } 
        
        if (lastDigit ==='2'){
            ordinalNumber += number.toString() + 'nd'
        } 
    
        if (lastDigit ==='3'){
            ordinalNumber += number.toString() + 'rd'
        }

        ordinalNumber += number.toString() + 'th'
    }
    
    return ordinalNumber
}


console.log(getOrdinalNumber(25))