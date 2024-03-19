const mobileNav = () => {

    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //State
    let isMobileNavOpen = false;
    
    
    headerBtn.addEventListener('click', () => {
        if(!isMobileNavOpen){
            
            mobileNav.style.display  = 'flex';
            document.body.style.overflowY = 'hidden';
            isMobileNavOpen = !isMobileNavOpen;
        }else{
            mobileNav.style.display  = 'none';
            document.body.style.overflowY = 'auto';
            isMobileNavOpen = !isMobileNavOpen;

        }
    });
    mobileLinks.forEach((mobLink)=>{
        mobLink.addEventListener('click',()=>{
            isMobileNavOpen = !isMobileNavOpen;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';

        });
    });
};

export default mobileNav;