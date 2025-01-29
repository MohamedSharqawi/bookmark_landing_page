// Start tab traversing in the first section in the main tag.
let tabTxt = document.querySelectorAll('.firstSection__tab__txt');
let tabItem = document.querySelectorAll('.firstSection__tab');
let imgs = document.querySelectorAll('.firstSection__imgGrp img');
let textGrps = document.querySelectorAll('.firstSection__txt');

tabTraversing();

tabTxt.forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelector('.active-tab').classList.remove('active-tab');
        tab.classList.add('active-tab');

        tabTraversing()
    })
})

tabItem.forEach((tab) => {
    // If you focus on the 'tab' and click 'enter', The 'p' inside will be clicked leading to change the tab
    tab.addEventListener("keyup", (e) => {
        if (e.key == "Enter") tab.querySelector("p").click();
    })
})

// Function to hide all imgs and texts and show one img and one text based on the 'data-order' attribute
function tabTraversing() {
    const activeTab = document.querySelector('.active-tab').dataset.order - 1;
    imgs.forEach((img, index) => {
        img.style.display = index == activeTab? "block": "none";
    });

    textGrps.forEach((grp, index) => {
        grp.style.display = index == activeTab? "flex": "none";
    });
}
// End tab traversing

// Start the FAQs Tabs
let faqTabs = document.querySelectorAll(".thirdSection__faq__header");

faqTabs.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
    item.addEventListener("click", () => {
        item.classList.toggle("show-faq");
        item.setAttribute("aria-expanded", item.classList.contains("show-faq")? "true": "false");
        item.querySelector("path").setAttribute("stroke", item.classList.contains("show-faq")? "hsl(0, 94%, 66%)": "#5267DF")
    });

    // If you focus on the 'item' and click enter, the content will expand
    item.addEventListener("keyup", (e) => {
        if (e.key == "Enter") item.click();
    })
})
// End the FAQs Tabs

// Start the email validation
let mailInput = document.getElementById("mail");

document.forms[0].addEventListener(("submit"), (e) => {
    if (!/^[a-zA-Z0-9._%-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,12}$/.test(mailInput.value)) {
        mailInput.classList.add("error");
        mailInput.setAttribute("aria-invalid", "true");
        e.preventDefault();
    }
})

mailInput.addEventListener("input", () => {
    mailInput.classList.remove("error");
    mailInput.setAttribute("aria-invalid", "false");
})
