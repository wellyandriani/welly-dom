console.log("Manipulation String");

const title = document.getElementById("title")
const output = document.getElementById("output-string")
const result = document.getElementById("button-btn")

const add = () => {
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const Birthday = document.getElementById("birthday").value
    const Address = document.getElementById("address").value
    const Email = document.getElementById("email").value
    const Phone = document.getElementById("phone").value

    console.log("Name : ", firstName, lastName);
    console.log("Date of Birthday: ", Birthday);
    console.log("Address: ", Address);
    console.log("Email: ", Email);
    console.log("Phone: ", Phone);

    output.innerText = `Name : ${firstName} ${lastName}
    Date of Birthday : ${Birthday}
    Address : ${Address}
    Email : ${Email} 
    Phone : ${Phone}`

}

result.addEventListener('click', add);