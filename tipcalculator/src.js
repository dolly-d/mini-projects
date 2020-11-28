function calculateTip(){
    let billAmt = document.querySelector(".billAmt").value 
    let service = document.querySelector(".serviceSelector").value 
    let numOfPeople = document.querySelector(".peopleAmt").value

    if(billAmt === "" || service===0){
        alert("please enter a value")
        return
    }
     if(numofPeople === "" || numOfPeople<+1){
         numOfPeople = 1
         document.getElementById("each").style.display="none"
     } else {
         document.getElementById("each").style.display = "block"
     }

     let total = (billAmt * service) / numofPeople
     toal = Math.round(total * 100) / 100
}

document.getElementById("calculate").addEventListener("click", function(){
    calculateTip()
})