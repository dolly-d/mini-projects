document.addEventListener('DOMContentLoaded', () =>{

    let count = 0
    
    const value = document.querySelector("#value")
    const unlike = document.querySelector(".unlike")
    const reset = document.querySelector(".reset")
    const like = document.querySelector(".like")

    like.addEventListener("click", function(e){
        const actions = e.currentTarget.classList
        if(actions.contains("like")){
            count++
        }
        value.textContent = count
    })

    unlike.addEventListener("click", function(e){
        const actions = e.currentTarget.classList
        if(actions.contains("unlike")){
            count--
        }
        value.textContent = count
    })

    reset.addEventListener("click", function(e){
        const actions = e.currentTarget.classList
        if(actions.contains("reset")){
            count = 0
        }
        value.textContent = count
    })
})

