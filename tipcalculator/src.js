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
     }
}

document.getElementById("calculate").addEventListener("click", function(){
    calculateTip()
})