//Dropdown Menu
let mobile = document.querySelector(".mobile");
mobile.querySelector("button").addEventListener("click", (e) => {
    mobile.querySelector(".links").classList.toggle("hidden")
});

//Load all news
let allNews = [
    {
        title: "Mais uma vez o público ataca: A corte e o que eles dizem sobre sua peble no Séc. XXI",
        img: "https://i.pinimg.com/564x/c4/97/62/c49762c7dcdefea024add7535692a70a.jpg",
        link: "#"
    },
    {
        title: "O grande evento começa: O que esperar do Emmy Awards de 2021?",
        img: "https://i.pinimg.com/564x/24/b0/3b/24b03b452c1987c41ed6191d0ac67de9.jpg",
        alt: "Imagem que acompanha",
        link: "#"
    },
    {
        title: "'Estou a 1 ano esperando mais nada ainda', entenda o sofrimento dessa jovem",
        img: "https://i.pinimg.com/236x/19/08/a5/1908a52490f830a431f6ebaec36cb20c.jpg",
        link: "#",
    },
    {
        title: "Conheça as 5 maiores ilhas do mundo. A 4ª vai te surpreender",
        img: "https://i.pinimg.com/236x/91/c0/e8/91c0e830399412225352ba6caf0efa46.jpg",
        link: "#"
    },
    {
        title: "Descubra agora o que o universo tem guardado para você",
        img: "https://i.pinimg.com/236x/47/2e/8d/472e8d30da5ba5a9176fefd9b2675212.jpg",
        link: "#",
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