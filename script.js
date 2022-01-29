;(()=>{
let touch = 0
$('.first').click(()=> {
    if(touch>=1) 
    {
        $('.first').fadeOut()
        setTimeout(()=> {
            $('.second').fadeIn()
        }, 400)
    }
    else {
        touch++
    }
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
    $('.white-space-lion').animate({left:'+=6.5vh'})
}


$('.second').click(()=>{
    if(true)
    {
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
        }, 7000)
    }
})
})()