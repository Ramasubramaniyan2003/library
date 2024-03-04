const express = require('express');
const app = express();
const path = require('path');
const bookroute = require('./route/bookroute.js');
const pug = require('pug');
app.use(express.static("public"));
app.use(express.static("books"));
const bodyParser = require('body-parser');
const { Author } = require("./modals/authors.js")
const { User, Cart, Book, sq } = require("./modals/index.js");
const { log } = require('console');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// image description
var cart = [

]

app.set('view engine', 'pug')
// index file
app.get('/', (req, res) => {
    return res.render('index');
})
//login
app.post('/authentication/login', async (req, res) => {
    const Username = req.body.username;
    const Password = req.body.password;
    try {
        const logincheck = await User.findOne({
            where: {
                username: Username,
            },
        })
        if (!logincheck) {
            return res.json({ success: false, id: "No User Found!" });
        }
        else if (Password != logincheck.password) {
            return res.json({ success: false, id: "Invalid Username or Password!" });
        }
        console.log("logincheck--->", logincheck);
        return res.json({ success: true, id: logincheck.id });
    }
    catch (e) {
        console.log("error in login------->", e);
        return res.json(false);
    }
})
//signup
app.post('/authentication/signup', async (req, res) => {
    const Username = req.body.username
    const Password = req.body.password
    try {
        const signupuser = await User.findOne({ where: { username: Username, } })
        if (signupuser) { return res.json(false); }
        const userdatafetching = await User.create({ username: Username, password: Password, })
        const findingid = await User.findOne({ where: { username: Username } })
        var cart_obj = Cart.create({ UserId: findingid.id });
        return res.json(true);
    }
    catch (error) {
        console.log("error in signup-------->", error);
    }
})

app.get('/books/types/:booktype', (req, res) => {
    return res.render('home');
})
//add to cart
app.post('/books/types/addtocart', async (req, res) => {
    const { Bookid, Userid } = req.body;
    console.log("bookid", Bookid)
    console.log("userid", Userid)
    try {
        var books = await Book.findOne({ where: { id: Bookid } })
        const cart = await Cart.findOne({ where: { id: Userid } })
        var temp = cart.dataValues.bookId;
        console.log(cart);
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id == Bookid) {
                return res.json({ message: "Already book added" });
            }
        }
        cart.bookId.push(books)
        const user = await Cart.update({ bookId: cart.bookId }, { where: { id: Userid } });
    } catch (e) {
        console.log("fetching error in cart page", e);
        return res.json({ sucess: false });
    }
    return res.json({ success: true });
})

//delete cart 
app.delete("/books/types/addtocart/delete", async (req, res) => {
    const { Userid, Bookid } = req.body;
    var userdata = await Cart.findOne({ where: { id: Userid } });
    const bookidnew = userdata.bookId.filter(value =>
        value.id != Bookid
    )
    const user = await Cart.update({ bookId: bookidnew }, { where: { id: Userid } });
    res.send(true);
})
// reset cart
app.delete("/books/types/addtocart/reset", async (req, res) => {
    const { Userid } = req.body;
    var userdata = await Cart.findOne({Userid},{ where: { id: Userid } });
    Cart.update(
        {
        bookId:[]
    },{
        where:{
            id:Userid,
        }
    }
    ),
    res.send(true);
})

//view cart
app.get('/viewcart', (req, res) => {
    res.render('mycart');
})
app.get('/description/:type/:id', (req, res) => {
    res.render('description');
})
app.get('/lib/:file', (req, res) => {
    const { file } = req.params;
    res.sendFile(path.join(__dirname, file + ".html"));
});
// Fetching
app.get("/getdata/:bookType", async (req, res) => {
    var authorname = [];
    try {
        const { bookType } = req.params;
        const fetchingdata = await Book.findAll({
            where: {
                bookType: bookType
            }
        })
        for (let element of fetchingdata) {
            // console.log(element.id)
            const authorfetching = await Author.findOne({
                where: {
                    id: element.id
                }
            })
            var author = {
                authorName: authorfetching.authorName,
            }
            authorname.push(author);
        }

        res.send({ "data": fetchingdata, "authorname": authorname });
    }
    catch (e) {
        console.log("error in fetching data", e);
    }
});
//get cart
app.post("/viewcart/getdata", async (req, res) => {
    const { Userid } = req.body;
    var cartfetching = await Cart.findOne({ where: { id: Userid } });
    return res.send({ success: true, data: cartfetching.bookId });
})
// download
app.get("/downloaddata/:bookdownload*", (req, res) => {
    const { bookdownload } = req.params;
    res.download('books/' + bookdownload + '.pdf', (error) => {
        console.log(error);
    });
})
app.listen(2000, (err) => {
    if (err) {
        console.log("port error", err);
    }
    else {
        console.log("server running sucessfully");
    }
});