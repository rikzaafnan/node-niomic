// import express
let express = require('express')

// import body parser
let bodyParser = require('body-parser')

// import mongoos
let mongoose = require('mongoose')

// initialite app
let app = express()

// import router
let apiRoutes = require('./api-routes')


// configuration body parse
app.use(bodyParser.urlencoded( {
    extended:true
} ))
app.use(bodyParser.json())

// conncect mongoose and ser connection variable

// pakemongodb atlas
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@learn-mongo.dxam1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// mongoose.connect("mongodb+srv://admin:<password>@learn-mongo.dxam1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// let db = mongoose.connection


// setup server port
let port = process.env.port || 8080

// send message for default url
app.get('/', (req, res) => {
    res.send('Hallo world with express nih')
})

// App api Routes
app.use('/api', apiRoutes.api)
// app.use('/data-siswa', apiRoutes.dataSiswa)
// send message for default url
app.get('/data-siswa', (req, res) => {
    res.json({
        status : 'API data siswa',
        message: 'Sukses get data siswa',
        data: [
            {
                nama : "Richard Muhammad",
                tanggalLahir : "14 januari 1994",
                jenisKelamin : "Laki-laki",
                hobi : "membaca, menulis"
            },
            {
                nama : "Aisyah",
                tanggalLahir : "14 januari 1994",
                jenisKelamin : "Perempuan",
                hobi : "mencuci, memasak"
            }
        ]
    })
})

// launch app to listen specified port
app.listen(port, function() {
    console.log(`Server resthub running on port ${port} `)
})