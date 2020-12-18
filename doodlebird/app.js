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

    class Platform{
        constructor(newPlatformBottom){
            this.bottom = newPlatformBottom
            this.left = Math.random() * 315
        }
    }

    createPlatforms=()=>{
        for (let i =0; i < platformCount; i++){
            let platformSpace = 600 / platformCount
            let newPlatformBottom = 100 + i * platformSpace
            let newPlatform = new Platform()
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