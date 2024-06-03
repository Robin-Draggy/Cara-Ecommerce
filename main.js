const bar = document.getElementById('bar')
const navbar = document.getElementById('navbar')
const close = document.getElementById('close')

bar.addEventListener('click', () => {
    navbar.classList.add('tablet')
})

close.addEventListener('click', () => {
    navbar.classList.remove('tablet')
})


// SINGLE PAGE PRODUCT
const mainImg = document.getElementById('mainImg')
        const smallImg = document.getElementsByClassName('smallImg')

        smallImg[0].onclick = function(){
            mainImg.src = smallImg[0].src
        }
        smallImg[1].onclick = function(){
            mainImg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function(){
            mainImg.src = smallImg[2].src
        }
        smallImg[3].onclick = function(){
            mainImg.src = smallImg[3].src
        }