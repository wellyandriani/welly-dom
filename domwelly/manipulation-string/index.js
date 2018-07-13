console.log("Manipulation String");

const title = document.getElementById("title")
const output = document.getElementById("output-string")

const add = () => {
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const Birthday = document.getElementById("birthday").value
    const Address = document.getElementById("firstname").value

    console.log("Name : ", firstName, lastName);
    console.log("Date of Birthday: ", Birthday);
    console.log("Address: ", Address);

    output.innerText = `Name : ${firstName} ${lastName}
    Date of Birthaday : ${Birthday}
    Address : ${Address}`

}

output.addEventListener('click',add);