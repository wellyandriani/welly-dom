console.log("Manipulation Number");

const title = document.getElementById("title")

const output = document.getElementById("output-number")

const getnumber = () => {
    const numberfirst = document.getElementById("number-first").value
    const numbersecond = document.getElementById("number-second").value


console.log("numberfirst:", numberfirst);
console.log("numbersecond:", numbersecond);

output.innerText = `
First Number : ${numberfirst}
Second Number : ${numbersecond}
`
}