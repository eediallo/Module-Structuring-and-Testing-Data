function ordinalNumberReference(numOfTimes) {
    for (let i = 1; i <= numOfTimes; i++) {
        const lastDigit = i.toString().slice(-1);
        const lastTwoDigits = i.toString().slice(-2);

        if (lastTwoDigits === "11" || lastTwoDigits === "12" || lastTwoDigits === "13") {
            console.log(i, ".", i.toString() + "th");
        } else {
            switch (lastDigit) {
                case "1":
                    console.log(i, ".", i.toString() + "st");
                    break;
                case "2":
                    console.log(i, ".", i.toString() + "nd");
                    break;
                case "3":
                    console.log(i, ".", i.toString() + "rd");
                    break;
                default:
                    console.log(i, ".", i.toString() + "th");
            }
        }
    }
}

ordinalNumberReference(20);
