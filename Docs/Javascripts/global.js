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


// ==============

// Fetch country data from API
async function fetchCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        // Extract necessary information and sort by country name
        const countries = data.map(country => ({
            code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""), // Dialing code
            name: country.name.common, // Country name
            flag: country.flags.svg, // Flag URL
        })).filter(country => country.code).sort((a, b) => a.name.localeCompare(b.name));

        return countries;
    } catch (error) {
        console.error('Error fetching country data:', error);
        return [];
    }
}

// Populate dropdown with country data
function populateDropdown(dropdown, countries) {
    countries.forEach(country => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-2 p-2 transition-all duration-500 hover:bg-gray-200 cursor-pointer';
        li.setAttribute('data-flag', country.flag);
        li.setAttribute('data-code', country.code); // Correct dialing code
        li.innerHTML = `
            <img src="${country.flag}" alt="${country.name} Flag" class="w-6 h-4">
            <div class="flex items-center justify-between w-full">
                <span class="text-gray-700">${country.name}</span>
                <span class="text-gray-500">${country.code}</span>
            </div>
        `;
        dropdown.appendChild(li);
    });
}

// Initialize dropdowns
async function initializeDropdowns() {
    const countries = await fetchCountryData();

    // Select all instances of dropdown containers
    const dropdownContainers = document.querySelectorAll('.dropdown-container');

    dropdownContainers.forEach(container => {
        const selected = container.querySelector('.selected');
        const dropdown = container.querySelector('.dropdown');

        // Populate the dropdown with country data
        populateDropdown(dropdown, countries);

        // Dropdown toggle
        selected.addEventListener('click', () => {
            dropdown.classList.toggle('hidden');
        });

        // Handle selection
        dropdown.addEventListener('click', (e) => {
            const item = e.target.closest('li');
            if (item) {
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
    });
}

// Fetch and initialize dropdowns
initializeDropdowns();



//  ==============

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
