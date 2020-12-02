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

//coba create apple---
const apple = new Fruit({
    name: "Apel",
    rating: 10,
    review: "Berwarna merah dan manis"
})

//save data satuan---
apple.save(function(error){ //memberikan parameter error jika ada error 
    if(error) {
        console.log(error)
    } else {
        console.log("Berhasil simpan buah apel ke dalam database")
    }
})