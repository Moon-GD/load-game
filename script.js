;(()=>{
$('.first').click(()=> {
    $('.first').fadeOut()
        setTimeout(()=> {
            $('.second').fadeIn()
        }, 400)
})
 

function goOn() {
    $('#go').css({"background-color":"orange"})
    $('#loop').css({"background-color":"white"})
}

function goOut() {
    $('#go').css({"background-color":"white"})
    $('#loop').css({"background-color":"orange"})
}

function lionMove() {
    goOn()
    $('.white-space-lion').animate({left:'+=5vw'})
}


$('.second').click(()=>{
    $('#sol1').fadeIn()
        $('#sol2').fadeIn()
        setTimeout(()=>{
            $('#first-text').fadeOut()
        }, 1600)

        setTimeout(()=>{
            $('#second-text').fadeOut()
        }, 4200)

        for(let i=0;i<5;i++)
        {
            setTimeout(()=> {
                setTimeout(()=>{
                    goOut()
                }, i * 300)

                setTimeout(()=>{
                    goOn()
                    lionMove()
                }, i * 500)
                
            }, i * 800)

            // 색깔 다시 끄기
            setTimeout(()=>{
                $('#go').css({"background-color":"white"})
                $('#loop').css({"background-color":"white"})
            }, 6000)
        }
        setTimeout(()=>{
            $('.second').fadeOut()
        }, 6500)

        setTimeout(()=>{
            $('.third').fadeIn()
        }, 7500)
})

let lion_out = ["#S1", "#ST1", "#STA1", "#STAR1", "#START1"]
let lion_on = ["#S2", "#ST2", "#STA2", "#STAR2", "#START2"]
$('#start-button-lion').click(()=>{
    for(let i=0;i<5;i++)
    {
        setTimeout(()=>{
            $('#start-button-lion').animate({left:"+=5vw"})
        }, i * 200)
        setTimeout(()=>{
            $(lion_out[i]).fadeOut()
        }, i * 400)
        
        setTimeout(()=>{
            $(lion_on[i]).fadeIn()
        }, i * 400)
    }
})
})()