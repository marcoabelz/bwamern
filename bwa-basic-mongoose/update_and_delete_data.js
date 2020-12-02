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

// Fruit.updateOne ({ _id: '5f4f52bde761ef4dd048f428' }, { name: 'Na Na S' }, function (error){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Berhasil update data mangga menjadi nanas");
//     }
// })

Fruit.deleteOne ({ _id: '5f4f52bde761ef4dd048f428' }, function (error){
    if (error) {
        console.log(error);
    } else {
        console.log("Berhasil delete data nanas");
    }
})

//menampilkan isi database
Fruit.find(function (error, fruits){
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Data buah setelah di update")
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        })
    }
})