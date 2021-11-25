
var people = [{
    "firstname": "Moritz",
    "lastname": "Brandner",
    "height": "170cm",
    "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dphineas%2Band%2Bferb&psig=AOvVaw3tNhYznvRa7Ii2NTUGoGC2&ust=1624688700572000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjF05mTsvECFQAAAAAdAAAAABAD "
}, {
    "firstname": "Ian",
    "lastname": "Felder",
    "height": "165cm",
    "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dphineas%2Band%2Bferb&psig=AOvVaw3tNhYznvRa7Ii2NTUGoGC2&ust=1624688700572000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjF05mTsvECFQAAAAAdAAAAABAD"
}, {
    "firstname": "Immanuel",
    "lastname": "Ehe",
    "height": "171cm",
    "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dphineas%2Band%2Bferb&psig=AOvVaw3tNhYznvRa7Ii2NTUGoGC2&ust=1624688700572000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjF05mTsvECFQAAAAAdAAAAABAD"   
}, {
    "firstname": "Rangel",
    "lastname": "Gashorov",
    "height": "180cm",
    "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FTooJhhx_phineas-und-ferb-candace-hd-png-download%2F&psig=AOvVaw3tNhYznvRa7Ii2NTUGoGC2&ust=1624688700572000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjF05mTsvECFQAAAAAdAAAAABAJ "
}
]

var html = "";

for(i=0;i<people.length;i++){
    html += "<div class='container'>";
    html += "<div class='main'> <ul><li>" + people[i].firstname + "</li><li>" + people[i].lastname + "</li></ul>" + "</div>";
    html += "<div class='Bild'> <img src='" + people[i].img + "'> </div>";
    html += "<div class='sideinfo'>" + people[i].height + "</div>";
    html += "</div>";
}

document.getElementById("container").innerHTML = html;