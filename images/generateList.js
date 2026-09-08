const fs = require('fs');

const titles = {
    "LM1.jpg": "AMOR VINCIT OMNIA",
    "LM2.jpg": "PRIMERA FOTO JUNTAS",
    "LM3.jpg": "PRIMER VIAJE JUNTAS",
    "LM4.jpg": "PRIMER MES DE NOVIAS",
    "LM5.jpg": "PRIDE",
    "LM6.jpg.jpg": "LIZ CON SUS LINDOS GESTOS DESDE NIÑA",
    "LM7.jpg.jpg": "LITTLE LIZ",
    "LM8.jpg.jpg": "SWEETIE",
    "LM9.jpg": "SIEMPRE JUNTAS",
    "LM10.jpg": "PEDIDA DE NOVIAS",
    "LM11.jpg": "PRIMER VIAJE JUNTAS",
    "LM12.jpg": "DATES",
    "LM13.jpg": "SIEMPRE SON RISAS CUANDO ESTAMOS JUNTAS",
    "LM14.jpg": "LA PRINCESITA MAS LINDA DEL MUNDO"
};

fs.readdir('./images', (err, files) => {

    files = files.filter(file =>
        !file.endsWith(".js") &&
        !file.endsWith(".json")
    );

    const list = files.map(file => ({
        title: titles[file] || file.split('.').slice(0, -1).join('.'),
        file
    }));

    let json = JSON.stringify({ images: list }, null, 4);

    fs.writeFileSync('./images/images.json', json);
});