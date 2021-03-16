
// initialite express router
let router = require('express').Router();


// set default api response
const api = router.get('/', (req, res) => {

    res.json({
        status : 'API is working',
        message: 'Welcome to RESTHub created!'
    })

})

// // set default api response
// const dataSiswa = router.get('/', (req, res) => {

//     res.json({
//         status : 'API data siswa',
//         // message: 'Welcome to RESTHub created!'
//     })

// })

// export API
module.exports = {
    api : api,
}