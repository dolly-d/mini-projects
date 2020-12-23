document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId 
    let downTimerId

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
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    createPlatforms=()=>{
        for (let i =0; i < platformCount; i++){
            let platformSpace = 600 / platformCount
            let newPlatformBottom = 100 + i * platformSpace
            let newPlatform = new Platform(newPlatformBottom)
            platforms.push(newPlatform)
            // console.log(platforms)
        }
    }
    movePlatforms=()=>{
        if (doodlerBottomSpace > 200){
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }
    }
    jump=()=>{
        clearInterval(downTimerId)
        upTimerId = setInterval(function (){
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace > 350){
                fall()
            }
        }, 30)
    }
    fall=()=>{
        clearInterval(upTimerId)
        downTimerId = setInterval(() => {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
        }, 30);
    }

    start =()=>{
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
            setInterval(movePlatforms, 30)
            jump()
        }
    }
    start()
})