const express = require('express')
const app = express()


app.get('/', (request, response) => {

    let html = `
    <html>
        <body>
            <h1 style="color:red">Hello World!!!</h1>
        </body>
    </html>
    `

    response.send(html)
})


app.get('/about', (request, response) => {

    let html = `
    <html>
        <body>
            <h1 style="color:blue">ABOUT US</h1>
        </body>
    </html>
    `

    response.send(html)
})


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Example app listening on url http://localhost:${PORT}`)
})
