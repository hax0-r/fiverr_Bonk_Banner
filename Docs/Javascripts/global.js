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


const selected = document.getElementById('selected');
const dropdown = document.getElementById('dropdown');

selected.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' || e.target.closest('li')) {
        const item = e.target.closest('li');
        const flag = item.getAttribute('data-flag');
        const code = item.getAttribute('data-code');

        // Update selected option
        selected.innerHTML = `
            <img src="${flag}" alt="Flag" class="w-6 h-4">
            <span class="text-gray-700">${code}</span>
        `;

        // Hide dropdown
        dropdown.classList.add('hidden');
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !selected.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});


const selected2 = document.getElementById('selected2');
const dropdown2 = document.getElementById('dropdown2');

selected2.addEventListener('click', () => {
    dropdown2.classList.toggle('hidden');
});

dropdown2.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' || e.target.closest('li')) {
        const item = e.target.closest('li');
        const flag = item.getAttribute('data-flag');
        const code = item.getAttribute('data-code');

        // Update selected2 option
        selected2.innerHTML = `
            <img src="${flag}" alt="Flag" class="w-6 h-4">
            <span class="text-gray-700">${code}</span>
        `;

        // Hide dropdown2
        dropdown2.classList.add('hidden');
    }
});

// Close dropdown2 when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown2.contains(e.target) && !selected2.contains(e.target)) {
        dropdown2.classList.add('hidden');
    }
});
