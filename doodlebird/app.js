document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let platformCount = 5

    createDoodler =()=>{
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace +'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    createDoodler()

    createPlatforms=()=>{
        for (let i =0; i < platformCount; i++){

        }
    }

    start =()=>{
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    start()
})