
!function(){
    let code =`
  
.preview{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE633;
}
.wrapper{
    width: 100%;
    height: 183px;
    position: relative;
}
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 11px;
    border-color: black transparent transparent;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -11px;
}
.eye{
    width: 48px;
    height: 48px;
    position: absolute;
    background: #2E2E2E;
    border-radius: 50%;
    border: 2px solid #000000;
}
.eye::before{
    content:'';
    display:block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    border: 2px solid #000000;
    top: -1px;
}
.eye.left{
    right: 50%;
    margin-right: 68px;
}
.eye.right{
    left: 50%;
    margin-left: 68px;
}
.face{
    width: 66px;
    height: 66px;
    background: #E93F33;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
.face.left{
    right: 50%;
    top: 84px;
    margin-right: 93px;
}
.face.right{
    left: 50%;
    top: 84px;
    margin-left: 93px;
}
.upperLip{
    height: 18px;
    width: 64px;
    border: 3px solid #000000;
    position: absolute;
    background: #FFE633;
}
.upperLip.left{
    right: 50%;
    top: 52px;
    border-bottom-left-radius: 40px 30px;
    transform: rotate(-25deg);
    border-top: none;
    border-right: none;
}
.upperLip.right{
    left: 50%;
    top: 52px;
    border-bottom-right-radius: 40px 20px;
    transform: rotate(25deg);
    border-top: none;
    border-left: none;
}
.lowerLip-wrapper{
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -71px;
    height: 128px;
    width: 200px;
    overflow: hidden;
}
.lowerLip{
    width: 140px;
    height: 1000px;
    background: #9C271F;
    border-radius: 100px/400px;
    border: 3px solid #000000;
    position: absolute;
    bottom: 0; 
    overflow: hidden;
} 
.cover{
    width: 25px;
    height: 12px;
    background: #FFE633;
    position: absolute;
}
.cover.left{
    right: 50%;
    margin-right: 40px;
    top: 53px;
}
.cover.right{
    left: 50%;
    margin-left: 40px;
    top: 53px;
}
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: 0;
    background: #E9425C;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
    
}  
    `
    var duration = 10
    $('button').on('click', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        if( speed === 'fast'){
            duration = 2
        } else if (speed === 'medium'){
            duration = 10
        } else if (speed === 'slow'){
            duration = 50
        }
    })
    function writeCode(Prefix, Code, Fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function fn(){
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(fn, duration)
            }
        },duration)
    }
    writeCode('', code)
}.call()