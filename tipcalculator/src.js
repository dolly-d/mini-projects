function calculateTip(){
    let billAmt = document.querySelector(".billAmt").value 
    let service = document.querySelector(".serviceSelector").value 
    let numOfPeople = document.querySelector(".peopleAmt").value

    if(billAmt === "" || service===0){
        alert("please enter a value")
        return
    }
     if
}

document.getElementById("calculate").addEventListener("click", function(){
    calculateTip()
})