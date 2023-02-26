document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

const blocks = document.querySelectorAll(".main__block__card, header")
const sideNavItems = document.querySelectorAll(".header__sidenav__item")

function myFunc() {
    blocks.forEach((block, index) => {
        if (block.offsetTop - (block.offsetHeight * 0.6) <= window.scrollY) {
            sideNavItems.forEach(elem => elem.classList.remove('header__sidenav__item-active'))
            sideNavItems[index].classList.add('header__sidenav__item-active')
            return
        }
    })
}
myFunc()
document.addEventListener("scroll", myFunc)

const burger = document.querySelector('.header__burger')
const mobileNav = document.querySelector('.header__mobile-nav')
burger.addEventListener("click", () => {
    if (burger.classList.contains('burger-active')) {
        burger.classList.remove('burger-active')
        mobileNav.classList.remove('header__mobile-nav-active')
        document.body.style.overflow = ''
    } else {
        burger.classList.add('burger-active')
        mobileNav.classList.add('header__mobile-nav-active')
        document.body.style.overflow = 'hidden'
    }
})