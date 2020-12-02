const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true}); //db-mongoose

const fruitSchema = new mongoose.Schema ({ //memanggil var mongoose dan menggunakan method schema
    name: {
        type: String,
        required: [true, 'Data nama tidak ditemukan, mohon isi!']
    },
    rating: { 
        type: Number,
        min: 1,
        max: 11        
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema ({ //memanggil var mongoose dan menggunakan method schema
    name: {
        type: String,
        required: [true, 'Data nama tidak ditemukan, mohon isi!']
    },
    age: { 
        type: Number       
    },
    favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

//coba create apple---
const fruitduku = new Fruit({
    name: "Duku",
    rating: 10,
    review: "Berwarna coklat dan manis"
})

//save data satuan---
fruitduku.save(function(error){ //memberikan parameter error jika ada error 
    if(error) {
        console.log(error)
    } else {
        console.log("Berhasil simpan buah duku ke dalam database")
    }
})

const people = new People ({
    name: "Abel",
    age: 21,
    favoriteFruit: fruitduku
})

//save data satuan---
people.save(function(error){ //memberikan parameter error jika ada error 
    if(error) {
        console.log(error)
    } else {
        console.log("Berhasil create Abel relationship people dan fruit ke dalam database")
    }
})