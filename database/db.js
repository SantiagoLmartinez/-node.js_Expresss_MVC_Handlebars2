const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
.then(() => {
    console.log('db connect OK...')
}).catch((err) => {
    console.log('connect failure'+ err)
});

// catch('')