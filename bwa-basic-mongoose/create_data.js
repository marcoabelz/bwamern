const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true}); //db-mongoose

const fruitSchema = new mongoose.Schema ({ //memanggil var mongoose dan menggunakan method schema
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

//coba create apple---
// const apple = new Fruit({
//     name: "Apel",
//     rating: 9.5,
//     review: "Berwarna merah dan manis"
// })

//save data satuan---
// apple.save(function(error){ //memberikan parameter error jika ada error 
//     if(error) {
//         console.log(error)
//     } else {
//         console.log("Berhasil simpan buah apel ke dalam database")
//     }
// })

//coba create melon
const melon = new Fruit({
    name: "Melon",
    rating: 10,
    review: "Rasanya enak"
})

//coba create mangga
const mangga = new Fruit({
    name: "Mangga",
    rating: 7.5,
    review: "Manis dan Lembut"
})

//coba create jeruk
const jeruk = new Fruit({
    name: "Jeruk",
    rating: 8,
    review: "Memiliki biji dan manis"
})

//insertmany untuk menyimpan beberapa data sekaligus---
Fruit.insertMany([melon, mangga, jeruk], function(error){
    if (error) {
        console.log(error)
    } else {
        //menutup koneksi database di terminal
        mongoose.connection.close();
        console.log ("Berhasil menyimpan melon, mangga, jeruk ke dalam db")
    }
})