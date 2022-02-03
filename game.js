;(()=>{
    let first = true, second = true, third = true, fourth = true, fifth = true
    // true : 비어있음
    // false : 비어있지 않음
    
    // 버튼 html 변수
    let go_html = '<span class="white-space-text">전진</span>'
    let north_html = '<img class="white-space-up" src="./assets/direction.png" alt="위쪽 화살표">'
    let east_html = '<img class="white-space-right" src="./assets/direction.png" alt="오른쪽 화살표">'
    let repeat_html = '<span class="white-space-text">반복</span>'

    // 버튼 클릭 시 경로에 활성화
    function isLoadEmpty() {
        if(first == true)
            return 1
        else if(second == true)
            return 2
        else if(third == true)
            return 3
        else if(fourth == true)
            return 4
        else if(fifth == true)
            return 5            
        else
            return -1
    }

    function loadOn(number, component) {
        if(number == -1) {

        }
        else if(number == 1) {
            $('#FIRST').html(component)
            first = false
        }
        else if(number == 2) {
            $('#SECOND').html(component)
            second = false
        }
        else if(number == 3) {
            $('#THIRD').html(component)
            third = false
        }
        else if(number == 4) {
            $('#FOURTH').html(component)
            fourth = false
        }
        else if(number == 5) {
            $('#FIFTH').html(component)
            fifth = false
        }
    }

    $('#GO').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, go_html)
    })

    $('#NORTH').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, north_html)
    })

    $('#EAST').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, east_html)
    })

    $('#REPEAT').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, repeat_html)
    })

    // 클릭 시 버튼 비활성화
    $('#FIRST').click(()=>{
        if(first == false) {
            $('#FIRST').html('')
            first = true
        }
    })

    $('#SECOND').click(()=>{
        if(second == false) {
            $('#SECOND').html('')
            second = true
        }
    })

    $('#THIRD').click(()=>{
        if(third == false) {
            $('#THIRD').html('')
            third = true
        }
    })

    $('#FOURTH').click(()=>{
        if(fourth == false) {
            $('#FOURTH').html('')
            fourth = true
        }
    })

    $('#FIFTH').click(()=>{
        if(fifth == false) {
            $('#FIFTH').html('')
            fifth = true
        }
    })

    // 사자가 존재할 수 있는 위치 배열
    let position_list = [
        [0, 0], [1, 0], [1, 1], [2, 1],
        [2, 2], [3, 2], [3, 3], [4, 3]
    ]
    
    let deg = 0
    function go() {
        if(deg == 0 || deg == 360) {
            $('#LION').animate({left:"+=5vw"}, 500)
        }
        else if(deg == 90 || deg == -270) {
            $('#LION').animate({bottom:"-=5vw"}, 500)
        }
        else if(deg == -90 || deg == 270) {
            $('#LION').animate({bottom:"+=5vw"}, 500)
        }
        else if(deg == 180 || deg == -180) {
            $('#LION').animate({left:"-=5vw"}, 500)
        }
    }

    function north() {
        for(let i=0;i<90;i++)
        {
            setTimeout(()=>{
                $('#LION').css({"transform":`rotate(${deg - i * 1}deg)`})
            }, i * 10)
        }
        setTimeout(()=>{
            deg -= 90
        }, 950)
    }

    function east() {
        for(let i=0;i<90;i++)
        {
            setTimeout(()=>{
                $('#LION').css({"transform":`rotate(${deg + i * 1}deg)`})
            }, i * 10)
        }

        setTimeout(()=>{
            deg += 90
        }, 950)
    }
    
    let order = ['#FIRST', '#SECOND', '#THIRD', '#FOURTH', '#FIFTH']
    let i = 0, infinite = 0
    
    function play(i) {
        content = $(order[i]).html()
        return new Promise((resolve, reject) => {
            if(content == repeat_html) {
                i = 0
                reject(i)
            }
            else if(content == go_html) {
                resolve(go)
            }
            else if(content == east_html) {
                resolve(east)
            }
            else if(content == north_html) {
                resolve(north)
            }
            else if(i >= 5 || infinite > 20) {
                window.location.reload()  // 일정 횟수가 넘어가면 페이지 리로드
                reject(200)
            }
            else {
                i++
                reject(i)
            }
        })
    }

    $('.go-btn').click(() => {
        play(i)
        .then((state)=>{
            state()
            i = i + 1
            infinite++
        })
        .catch((index)=>{
            i = index, infinite++
            if(i == 0) {
                play(i)
                .then((state)=>{
                    state()
                    i = i + 1
                    infinite++
                })
                .catch((index)=>{
                    i = index, infinite++
                })
            }
        })
    })
})()