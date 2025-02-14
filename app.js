// THERE ONLY DIVS;
const MainDivWrap = document.createElement("div");
MainDivWrap.setAttribute("class", "MainDivWrap");

const inFirstDivWrapper = document.createElement("div");
inFirstDivWrapper.setAttribute("class", "inFirstDivWrapper");

const inSecondDivWrapper = document.createElement("div");
inSecondDivWrapper.setAttribute("class", "inSecondDivWrapper");

// THERE ONLY INFIRSTDIV'S ELEMENTS;
const avatarImg = document.createElement("img");
avatarImg.setAttribute("class", "avatarImg");
avatarImg.src = 'profile-pic.png';

const title = document.createElement("h3");
title.setAttribute("class", "title");
title.textContent = "Jessica Randall";

const subtitle = document.createElement("h5");
subtitle.setAttribute("class", "subtitle");
subtitle.textContent = "Frontend Developer";

const parahraf = document.createElement("p");
parahraf.setAttribute("class", "parahraf");
parahraf.textContent = "London, United Kingdom";

// THERE ONLY INSECONDDIV'S ELEMENTS;
const ul = document.createElement("ul");
ul.setAttribute("class", "list");

const arr = [
    'GitHub',
    'Frontend Mentor',
    'LinkedIn',
    'Twitter',
    'Instagram'
];

for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "item");

    const a = document.createElement("a");
    a.setAttribute("class", "link");
    a.href = "#";
    a.textContent = arr[i];

    li.appendChild(a);
    ul.appendChild(li);
}

inSecondDivWrapper.appendChild(ul);
inFirstDivWrapper.append(avatarImg, title, subtitle, parahraf);
MainDivWrap.append(inFirstDivWrapper, inSecondDivWrapper);
document.body.appendChild(MainDivWrap);
