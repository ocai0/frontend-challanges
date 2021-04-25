function addEvent() {
    let a = document.querySelectorAll("section");
    a.forEach(item => {
        item.onmouseenter = (event) => {
            item.querySelector("div").classList.toggle("hidden");
            item.querySelector("div").classList.toggle("flex");
        };
        item.onmouseleave = (event) => {
            item.querySelector("div").classList.toggle("hidden");
            item.querySelector("div").classList.toggle("flex");
        };
    });
}

let info = [
    {
        img: "1.jpg",
        title: "Panic Room",
        artist: "Au/Ra",
        year: "2018"
    },
    {
        img: "2.jpg",
        title: "Plastic Love",
        artist: "Friday Night Plans",
        year: "2018"
    },
    {
        img: "3.jpg",
        title: "Age Of Wonders",
        artist: "BrunuhVille",
        year: "2016"
    },
    {
        img: "4.jpg",
        title: "Other Things",
        artist: "Plini",
        year: "2013"
    },
    {
        img: "5.jpg",
        title: "Chroma Velocity",
        artist: "City Girl",
        year: "2019"
    },
    {
        img: "6.jpg",
        title: "Journey",
        artist: "Ichika Nito",
        year: "2018"
    },
    {
        img: "7.jpg",
        title: "Chillhop Essentials - Spring 2018",
        artist: "Chillhop",
        year: "2018"
    },
    {
        img: "8.jpg",
        title: "Aurora",
        artist: "Peter Gundry",
        year: "2016"
    },
    {
        img: "9.jpg",
        title: "Contemporis of the Jazz Guitar",
        artist: "Al Viola",
        year: "2008"
    },
    {
        img: "10.jpg",
        title: "Vagabond",
        artist: "Adrian Von Ziegler",
        year: "2013"
    },
    {
        img: "11.png",
        title: "Panic Room",
        artist: "Au/Ra",
        year: "2018"
    },
    {
        img: "12.jpeg",
        title: "Momodora: Reverie Under The Moonlight",
        artist: "Bomb Service",
        year: "2016"
    },
    {
        img: "13.jpg",
        title: "VARIETY",
        artist: "Mariya Takeuchi",
        year: "1984"
    },
    {
        img: "14.jpg",
        title: "Forever, Michael",
        artist: "Michael Jackson",
        year: "1975"
    },
    {
        img: "15.jpg",
        title: "Queen: Greatest Hits",
        artist: "Queen",
        year: "1981"
    },
    {
        img: "16.png",
        title: "Transmission of all the Goodbyes",
        artist: "Lilium",
        year: "2002"
    },
    {
        img: "17.jpg",
        title: "Playtime",
        artist: "L'indécis",
        year: "2017"
    },
    {
        img: "18.jpg",
        title: "The Dark & The Light",
        artist: "Shawn James",
        year: "2018"
    },
    {
        img: "19.jpg",
        title: "Violeta",
        artist: "Terno Rei",
        year: "2019"
    },
]

function load() {
    let par = document.querySelector("main");
    info.forEach(item => {
        let newEl = document.createElement("section");
        newEl.classList.add("card");
        newEl.innerHTML = `<img src='img/${item.img}'><div class='hidden'><h2>${item.title}</h2><p>${item.artist}</p><p>${item.year}</p></div>`;
        par.appendChild(newEl);
    });
    addEvent();
}