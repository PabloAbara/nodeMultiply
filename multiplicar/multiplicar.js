// #require
const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo = (base) => {}
let crearArchivo = (base,limite = 10) => {
  return new Promise((resolve,reject)=>{
    if (!Number(base) || !Number(limite)){
      reject(`El valor introducido ${base} o ${limite} no es un número`);
      return;
    }
    let data = `*****TABLA DEL ${base}*****\n`;
    for(let i=1;i<=limite;i++){
      data+= `${base}*${i} = ${base*i}\n`;
    }
    data+= `*****THE END*****`;

    // const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
      if (err) reject(err)
      else{
        resolve(`Tabla-${base}.txt`)
        // console.log('El archivo ha sido creado!');
      }
    });
  })
}

let listarTabla = (base,limite =10) => {
  return new Promise((resolve,reject)=>{
    if (!Number(base) || !Number(limite)){
      reject(`El valor introducido ${base} o ${limite} no es un número`);
      return;
    }
    console.log(`*****TABLA DEL ${base}*****\n`.green);
    for(let i=1;i<=limite;i++){
      console.log(`${base}*${i} = ${base*i}\n`.red);
    }
    console.log(`*****THE END*****`.green);
  })
}

// hermosa manera de exportar funciones
module.exports = {
  crearArchivo,
  listarTabla
}
