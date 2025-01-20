const cards = [
    {
        image: "./Docs/Assets/Cashback card.png",
        title: "CASHBACK",
        description: "Customer cashback as an incentive for future purchases."
    },
    {
        image: "./Docs/Assets/Stamp Card.png",
        title: "STAMPS",
        description: "Buy 9, get the 10th free."
    },
    {
        image: "./Docs/Assets/Points Card.png",
        title: "REWARDS",
        description: "Points system for your loyal customers."
    },
    {
        image: "./Docs/Assets/Membership Card.png",
        title: "MEMBERSHIP",
        description: "Create your VIP loyalty club for exclusive members."
    },
    {
        image: "./Docs/Assets/Discounts Card.png",
        title: "DISCOUNTS",
        description: "Manage wholesale sales with discounts."
    },
    {
        image: "./Docs/Assets/Coupon Card.png",
        title: "COUPON",
        description: "Perfect for ads. It transforms into a new one after being used."
    },
    {
        image: "./Docs/Assets/Prepaid Card.png",
        title: "PREPAID",
        description: "Advance payments with prepaid stamp cards."
    },
    {
        image: "./Docs/Assets/Gift Cards.png",
        title: "GIFTCARDS",
        description: "Advance payments with prepaid gifts."
    },
];
const container = document.querySelector(".mobileCards");

cards.forEach(card => {
    const cardHTML = `
    <div class="w-full bg-[#e6e6e6] md:rounded-[2.5rem] rounded-3xl border-4 border-white overflow-hidden md:p-4 p-2">
        <img src="${card.image}" class="w-full" alt="${card.title}">
        <h2 class="font-bold text-center md:text-3xl text-2xl pt-6 md:pt py-3.5">${card.title}</h2>
        <p class="text-center md:font-semibold font-medium md:text-lg pb-2 md:leading-tight">${card.description}</p>
    </div>
`;
    container.innerHTML += cardHTML;
});


document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
        tab: 0
    });

    Alpine.data('accordion', (idx) => ({
        init() {
            this.idx = idx;
        },
        idx: -1,
        handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
        },
        handleRotate() {
            return this.$store.accordion.tab === this.idx ? 'rotate-180 opacity-0' : '';
        },
        handleToggle() {
            return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
        }
    }));
})