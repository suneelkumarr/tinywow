var express = require("express")
var app = express()
const pdf = require("./routes/pdf.routes")
app.set("view engine", 'ejs')

const posts = [
    { title: 'Title 1', body: 'Body 1' },
    { title: 'Title 2', body: 'Body 2' },
    { title: 'Title 3', body: 'Body 3' },
    { title: 'Title 4', body: 'Body 4' },
]


const user = {
    firstName: 'Suneel',
    lastName: 'Kumar',
}

app.get("/", function (req, res) {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
    // res.render('pages/index')
});

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"
    })
})
app.get('/about', function (req, res) {
    res.render('pages/about', {
        title: "About"
    })
})
// app.get('/pages/pdf/edit', function (req, res) {
//     res.render('pages/pdf/edit', {
//         title: "PDF"
//     })
// })

app.use('/pages/pdf', pdf)

app.listen(3000)

console.log("Server is listening on port 3000")