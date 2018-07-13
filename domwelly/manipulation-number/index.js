
console.log(" Manipulation Number");

const title = document.getElementById("title")
const output = document.getElementById("output-number")

const getNumbers = () => {
    const numberFirst = document.getElementById("number-first").value
    const numberSecond = document.getElementById("number-second").value

    console.log("numberFirst:", numberFirst);
    console.log("numberSecond:", numberSecond);

    output.innerText = `
    First Number: ${numberFirst}
    Second Number: ${numberSecond}
    `
}
