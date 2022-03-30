const express = require('express')
const app = express()

app.use(express.json())

let books = [
    {
        id: 1,
        title: "The Code of the Extraordinary Mind",
        author: "Vishen Lakhiani",
        price: 100,
        img: "https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2Fthe-code-of-the-extraordinary-mind-3.png?alt=media&token=35295678-9534-4887-9310-eb0d722c052c"
    },
    {
        id: 2,
        title: "Outliers",
        author: "Malcolm Gladwell",
        price: 80,
        img: "https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2FOutliers.png?alt=media&token=a5c1d4c8-4117-42d1-b1fd-b4ea76ca4ce8"
    }

]

app.get('/books', (request, response) => {

    response.json(books)
})


app.post('/books', (request, response) => {

    let book = request.body

    if(!book.title){
        response.status(400)
        return response.send("title is required")
    }

    if(!book.author){
        response.status(400)
        return response.send("author is required")
    }

    book.id = books.length + 1


    books.push(book)

    response.json(book)

})


app.put('/books/:id', ((request, response) => {
    let id = request.params.id
    let book = request.body


    let index = books.findIndex((book) => book.id === parseInt(id))

    if(index === -1){
        response.status(404)
        return response.send("Libro no existe")
    }

    books[index].title = book.title
    books[index].author = book.author
    books[index].price = book.price
    books[index].img = book.img

    response.send(books[index])
}))


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Example app listening on url http://localhost:${PORT}`)
})
