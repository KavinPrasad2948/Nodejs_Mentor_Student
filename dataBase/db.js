const mongoose = require('mongoose');

const Password = '0zlwemZR8LIlS71I'
const dbURL =`mongodb+srv://jcgccssiq:${Password}@kavin.mphmlun.mongodb.net/`

mongoose.connect(dbURL)
.then(()=>{
    console.log('Database Connected');
})
.catch((err)=>{
    console.log("Failed to connect",err);
})

module.exports = mongoose;
