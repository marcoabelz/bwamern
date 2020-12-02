const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true}); //db-mongoose

const fruitSchema = new mongoose.Schema ({ //memanggil var mongoose dan menggunakan method schema
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

//menampilkan isi database
Fruit.find(function (error, fruits){
    if (error) {
        console.log(error)
    } else {
        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name)
        })
    }
})