

function getOrdinalNumber(number){
    let ordinalNumber = ''
    lastDigit = number.toString().slice(-1)

    if (lastDigit ==='1'){
        ordinalNumber += number.toString() + 'st'
    } 

    
    if (lastDigit ==='2'){
        ordinalNumber += number.toString() + 'nd'
    } 

    if (lastDigit ==='3'){
        ordinalNumber += number.toString() + 'rd'
    }

    if (lastDigit !=='1' && (lastDigit !=='2') && (lastDigit !=='3')){
        ordinalNumber += number.toString() + 'th'
    } 

    return ordinalNumber
}


console.log(getOrdinalNumber(50))