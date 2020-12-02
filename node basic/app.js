//console.log("Hello World")

// var a = 10
// var b = 15
// var c = a + b
// console.log(c)

// function penjumlahan (a, b){
//     return a + b;
// }
// console.log(penjumlahan(2, 2))


//--module file system / copy file
// const fs = require("fs");
// fs.copyFileSync("text.txt", "text2.txt");
// console.log("Success Copied text2")

//------------------------------npm superhero---------------------------
// const superhero = require("superheroes");
//1
// for (let i = 0; i < 10; i++) {
//     console.log(superhero.random());
// }

//2
// const nameHero = superhero.all;
// console.log(nameHero);

//------------------------buat module sendiri-----------------------------
// const ModuleSendiri = require("./module");

// const ModuleTambah = ModuleSendiri.tambah(10, 15);

// const title = ModuleSendiri.title;
// console.log(ModuleTambah);


//--buat module sendiri
// const ModulePerkalian = ModuleSendiri.perkalian(10, 2);
// console.log(title);
// console.log(ModulePerkalian);
// console.log(ModuleTambah);
