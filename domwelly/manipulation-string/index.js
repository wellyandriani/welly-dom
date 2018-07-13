console.log("Manipulation String");

const title = document.getElementById("title")
const output = document.getElementById("output-string")
const result = document.getElementById("button-btn")

const callname  = [`${Name1}`, `${Name2}`, `${Name3}`, `${Name4}`];
document.getElementById("butto-btn").innerHTML = callname;

function Fungsi(){
    callname.sort();
    document.getElementById("button-btn").innerHTML = callname;
}


const getName = () => {
    const Name1 = document.getElementById("name1").value
    const Name2 = document.getElementById("name2").value
    const Name3 = document.getElementById("name3").value
    const Name4 = document.getElementById("name4").value



    output.innerText = `Name1 : ${Name1}
    Name2 : ${Name2}
    Name3 : ${Name3}
    Name4 : ${Name4}`

}

result.addEventListener('click', getName);