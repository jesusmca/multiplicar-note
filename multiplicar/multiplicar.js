//requires
const fs = require('fs'); // Ya existe en NODE
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((reject, resolver) => {
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base*i }\n`);
        }
    });
}


crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido como base: "${ base }" no es númerico.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido como limite: "${ limite }" no es numerico`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}