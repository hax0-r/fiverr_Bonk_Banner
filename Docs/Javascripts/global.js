const responsiveNavbar = document.getElementById("responsiveNavbar")
const closeNav = document.getElementsByClassName("closeNav")
const openNav = document.getElementById("openNav")

openNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "100%"
})

Array.from(closeNav).forEach(button => {
    button.addEventListener('click', () => {
        responsiveNavbar.style.width = "0%";
    });
});


// contact Popup


const contectPopup = document.getElementById("contectPopup");
const contectPopupOverlay = document.getElementById("contectPopupOverlay");
const contectPopupOpen = document.getElementsByClassName("contectPopupOpen");

let popupShowCount = 0;
const popupIntervals = [32 * 1000, 150 * 1000];

Array.from(contectPopupOpen).forEach((open) => {
    open.addEventListener('click', () => {
        contectPopup.style.display = "block"; 
        setTimeout(() => {
            contectPopup.style.opacity = "1";
        }, 10); 
    });
});

function showPopup() {
    if (popupShowCount < popupIntervals.length) {
        contectPopup.style.display = "block";
        setTimeout(() => {
            contectPopup.style.opacity = "1";
        }, 10);
    }
}

function hidePopup() {
    contectPopup.style.opacity = "0";
    setTimeout(() => {
        contectPopup.style.display = "none";
        popupShowCount++;
        if (popupShowCount < popupIntervals.length) {
            setTimeout(showPopup, popupIntervals[popupShowCount]);
        }
    }, 500);
}

contectPopupOverlay.addEventListener('click', hidePopup);

setTimeout(showPopup, popupIntervals[0]);


const AffiliateBusiness = document.getElementById("AffiliateBusiness");
const AffiliateBusinessOverlay = document.getElementById("AffiliateBusinessOverlay");
const AffiliateBusinessOpen = document.getElementsByClassName("AffiliateBusinessOpen");

AffiliateBusinessOverlay.addEventListener('click', () => {
    AffiliateBusiness.style.opacity = "0"; 
    setTimeout(() => {
        AffiliateBusiness.style.display = "none";
    }, 500); 
});

Array.from(AffiliateBusinessOpen).forEach((open) => {
    open.addEventListener('click', () => {
        AffiliateBusiness.style.display = "block"; 
        setTimeout(() => {
            AffiliateBusiness.style.opacity = "1";
        }, 10); 
    });
});

