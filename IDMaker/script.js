const generateID=document.querySelector(".generateID")
const idbox=document.querySelector(".idbox")
//inputs
const inpcname=document.querySelector("#cname")
const inpaddress=document.querySelector("#address")
const inpfname=document.querySelector("#fname")
const inpdob=document.querySelector("#dob")
const inpnationality=document.querySelector("#nationality")
const inpgender=document.querySelector("#gender")
const inpoccupation=document.querySelector("#occupation")
const inpcontact=document.querySelector("#contact")
const inptcolor=document.querySelector("#tcolor")
const inpbcolor=document.querySelector("#bcolor")
const inpimage=document.querySelector("#image")
const inplogo=document.querySelector("#inplogo")

//result
const company=document.querySelector(".company")
const address=document.querySelector("address")
const fname=document.querySelector(".fname")
const dob=document.querySelector(".dob")
const nationality=document.querySelector(".nationality")
const gender=document.querySelector(".gender")
const occupation=document.querySelector(".occupation")
const contact=document.querySelector(".contact")
const image=document.querySelector(".image")
const logo=document.querySelector(".logo")

function logofile(){
    let reader1=new FileReader()
    let file=inplogo.files[0]
    reader1.onload=function(e){
        logo.src=e.target.result
    }
    reader1.readAsDataURL(file)
}

function imagefile(){
    let reader1=new FileReader()
    let file=userimage.files[0]
    reader1.onload=function(e){
        image.src=e.target.result
    }
    reader1.readAsDataURL(file)
}

function getID(){
    if(inpcname.value===""||inpaddress.value===""||inpfname.value===""||
    inpdob.value===""||inpnationality.value===""||inpgender.value===""||
    inpoccupation.value===""||inpcontact.value===""||inplogo.value===""||
    inpimage===""){
        alert("Please, fill all fields")
    }
else{
    company.innerText=inpcname.value
    address.innerText=inpaddress.value
    fname.innerHTML=`Name: <br>${inpfname.value}`
    dob.innerHTML=`DOB: <br>${inpdob.value}`
    nationality.innerHTML=`Nationality <br>${inpnationality.value}`
    gender.innerHTML=`Gender: <br>${inpgender.value}`
    occupation.innerHTML=`Occupation <br>${inpoccupation.value}`
    contact.innerHTML=`Contact: <br>${inpcontact.value}`
    idbox.style.backgroundColor=inpbcolor.value
    idbox.style.color=inptcolor.value
    generateID.style.display="block"
}
}


function download(){
html2canvas(idbox,{allowTaint:true}).then(
    function(canvas){
        let link=document.createElement("a")
        document.body.appendChild(link)
        link.download=`${fname.value}ID.jpg`
        link.href=canvas.toDataURL()
        link.target="_blank"
        link.click()
    }
)
}
