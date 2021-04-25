//Dropdown Menu
let mobile = document.querySelector(".mobile");
mobile.querySelector("button").addEventListener("click", (e) => {
    mobile.querySelector(".links").classList.toggle("hidden")
});

//Load all news
let allNews = [
    {
        title: "Misticismo, amor e poder: Descubra como era o mundo anterior a tecnologia nos antigos anos 'Antes de Cristo'",
        img: "https://64.media.tumblr.com/e77775d389337fbb9c908a6d938ddcd7/04de2fda593855df-cc/s1280x1920/cdc5b65fd4c3085a7d22b1c28e846438050975e5.jpg",
        link: "article.html"
    },
    {
        title: "'O Balanço', conheça esta e outras obras de Julian Rossi Ashton",
        img: "https://64.media.tumblr.com/f2c20e0006895e8c3238a0046bbea53b/6ae9e6848b316ea2-f4/s1280x1920/f8707fe0da3a10876c899f600281fea951f93709.jpg",
        alt: "The Swing, Julian Rossi Ashton",
        link: "#"
    },
    {
        title: "Arquiteturas e construções imortalizadas em diversas pinturas",
        img: "https://64.media.tumblr.com/5cfcfb42be4e30e70d14e0620c8c3a13/ca66668e53e043f8-b9/s1280x1920/bb1834b96924e7aaf289dc41ebcb830beffbd621.jpg",
        link: "#",
    },
    {
        title: "Veja as pinturas que possuem duas imagens em uma",
        img: "https://64.media.tumblr.com/36ed1fbf8ef32df811f0980406d73ad8/39ad38edb95719b1-72/s1280x1920/f7f8ae171c7c83cfe34a4718c1eefa9acf972a03.jpg",
        link: "#",
    },
    {
        title: "Conheça 5 mitos esquecidos pelo mundo. A 4ª vai te surpreender",
        img: "https://i.pinimg.com/236x/91/c0/e8/91c0e830399412225352ba6caf0efa46.jpg",
        link: "#"
    },
    {
        title: "Rencontro emocionante depois de mais de 50 anos",
        link: "#",
    },
    {
        title: "O que as poesias tem a oferecer pra nós?",
        link: "#",
    },
    {
        title: "Canto do Esplendor, o que diz este filme",
        link: "#",
    },
    {
        title: "Saiba as receitas da semana",
        link: "#",
    },
    {
        title: "Fotos da famosa atriz são publicadas",
        link: "#",
    },
    {
        title: "O que faria se encontrasse 100.000 reais?",
        link: "#",
    },
    {
        title: "Enxame de pássaros preocupa agricultores",
        link: "#",
    },
];
function loadNews() {
    let feed = document.querySelector("#news");
    allNews.forEach((element, index) => {
        let newCard = document.createElement("section");
        newCard.classList.add("card");
        if(index == 1) newCard.classList.add("second");

        // Parou aqui, tem 3 tamanhos (Large, med, small), manchete nao conta
        if(element.img) newCard.classList.add("hasImg");
        
        if(element.alt) newCard.setAttribute("alt", element.alt);
        if(element.img) newCard.innerHTML += `<img src='${element.img}'>`;
        let content = element.title;
        if(index !== 0) content = trimString(content, 60);
        if(element.link) newCard.innerHTML += `<a href='${element.link}'><h2 title='${element.title}'>${content}</h2></a>`;
        else newCard.innerHTML +=`<h2>${element.title}</h2>`;
        feed.appendChild(newCard);
    });
    function trimString(str, numOfChars) {
        if(str.length < numOfChars + 3) return str;
        return str.substr(0,numOfChars).concat("...");
    }
}