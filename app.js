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
const database = {
    action: [
        {
            image_name: "Jurassic Park (Jurassic Park, #1)",
            image: "book1.jpg",
            image_path: "/images/action/book1.jpg",
            Description: "An astonishing technique for recovering and cloning dinosaur DNA has been discovered. Now humankind’s most thrilling fantasies have come true. Creatures extinct for eons roam Jurassic Park with their awesome presence and profound mystery, and all the world can visit them—for a price",
            book_path: "/book1",
            author_name: "by Michael Crichton",
            rating: "",
            views: ""
        },
        {
            image_name: "The Hunger Games",
            image: "book2.jpg",
            image_path: "/images/action/book2.jpg",
            Description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
            book_path: "/book2",
            author_name: "by Suzanne Collins",
            rating: "",
            views: ""
        },
        {
            image_name: "The Hunt for Red October",
            image: "book3.jpg",
            image_path: "/images/action/book3.jpg",
            Description: "Here is the runaway bestseller that launched Tom Clancy's phenomenal career. A military thriller so gripping in its action and so convincing in its accuracy that the author was rumored to have been debriefed by the White House. Its theme: the greatest espionage coup in history. Its story: the chase for a top secret Russian missile sub. Lauded by the Washington Post as breathlessly exciting. The Hunt for Red October remains a masterpiece of military fiction by one of the world's most popular authors, a man whose shockingly realistic scenarios continue to hold us in thrall. Somewhere under the Atlantic, a Soviet sub commander has just made a fateful decision. The Red October is heading west. The Americans want her. The Russians want her back. And the most incredible chase in history is on...",
            book_path: "/book3",
            author_name: "by Tom Clancy",
            rating: "",
            views: ""
        }
    ],
    classic: [
        {
            image_name: "Pride and Prejudice (Paperback)",
            image: "book1.jpg",
            image_path: "/images/classic/book1.jpg",
            Description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work her own darling child and its vivacious heroine, Elizabeth Bennet,as delightful a creature as ever appeared in print.The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
            book_path: "/book1",
            author_name: "by Jane Austen Anna Quindlen ",
            rating: "",
            views: ""
        },
        {
            image_name: "To Kill a Mockingbird",
            image: "book2.jpg",
            image_path: "/images/classic/book2.jpg",
            Description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and deeply moving,To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
            book_path: "/book2",
            author_name: "by Harper Lee",
            rating: "",
            views: ""
        },
        {
            image_name: "The Great Gatsby",
            image: "book3.jpg",
            image_path: "/images/classic/book3.jpg",
            Description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.The Great Gatsby is one of the great classics of twentieth-century literature. ",
            book_path: "/book3",
            author_name: "by F. Scott Fitzgerald",
            rating: "",
            views: ""
        }
    ],
    history: [
        {
            image_name: "A Brief History Of Time",
            image: "book1.jpg",
            image_path: "/images/history/book1.jpg",
            Description: "Stephen Hawking's classic work has become a landmark volume in scientific writing, with more than nine million copies in forty languages sold worldwide. The intervening years have seen extraordinary advances in the technology of observing both the micro- and the macrocosmic worlds.",
            book_path: "/book1",
            author_name: "By: Stephen Hawking",
            rating: " ",
            views: " "

        },
        {
            image_name: "Antonina Or, The Fall Of Rome",
            image: "book2.jpg",
            image_path: "/images/history/book2.jpg",
            Description: "A romance of the fifth century, in which many of the scenes described in the 'Decline and Fall of the Roman Empire ' are reset to suit the purpose of the author. Only two historical personages are introduced into the story,— the Emperor Honorius, and Alaric the Goth; and these attain only a secondary importance. Among the historical incidents used are the arrival of the Goths at the gates of Rome, the Famine, the last efforts of the besieged, the Treaty of Peace, the introduction of the Dragon of Brass, and the collection of the ransom,— most of these accounts being founded on the chronicles of Zosimus.",
            book_path: "/book2",
            author_name: "By: Wilkie Collins",
            rating: "",
            views: ""
        },
        {
            image_name: "A History of China",
            image: "book3.jpg",
            image_path: "/images/history/book3.jpg",
            Description: "have also been concerned not to leave out of account China's relations with her neighbours. Now that we have a better knowledge of China's neighbours, the Turks, Mongols, Tibetans, Tunguses, Tai, not confined to the narratives of Chinese, who always speak only of barbarians, we are better able to realize how closely China has been associated with her neighbours from the first day of her history to the present time; how greatly she is indebted to them, and how much she has given them. We no longer see China as a great civilization surrounded by barbarians, but we study the Chinese coming to terms with their neighbours, who had civilizations of quite different types but nevertheless developed ones.It is usual to split up Chinese history under the various dynasties that have ruled China or parts thereof. The beginning or end of a dynasty does not always indicate the beginning or the end of a definite period of China's social or cultural development. We have tried to break China's history down into the thre",
            book_path: "/book3",
            author_name: "By Wolfram Eberhard",
            rating: "",
            views: ""
        }
    ],
    comedy: [
        {
            image_name: "Comedy Shorts - Four Short Stories",
            image: "book1.jpg",
            image_path: "/images/humor/book1.jpg",
            Description: "Sleuthing For Beginners Angela has always had a secret ambition to be a private detective. After her neighbour dies suddenly she launches her own investigation, with unexpected results. A Peaceful DeathGeorge, who has been obsessed with death since his father died, is visited by The Angel of Death, who strikes an unusual bargain. A Girl’s Best FriendAli, the sole beneficiary of her uncle’s will, learns that he may have a secret, ill-gotten fortune stashed away. But she soon discovers she's not the only one determined to find it.The MuseEsther, a struggling romance writer, meets her muse Alfred, and he moves in, providing her with a constant source of inspiration. But is the cost too high? If you like variety in your short stories and you’re looking for a book you can read on the train or in a couple of spare hours, this book is for you.",
            book_path: "/book1",
            author_name: "By Robin Storey",
            rating: " ",
            views: " "

        },
        {
            image_name: "The Eleven Comedies (Volume 1)",
            image: "book2.jpg",
            image_path: "/images/humor/book2.jpg",
            Description: "A romance of the fifth century, in which many of the scenes described in the 'Decline and Fall of the Roman Empire ' are reset to suit the purpose of the author. Only two historical personages are introduced into the story,— the Emperor Honorius, and Alaric the Goth; and these attain only a secondary importance. Among the historical incidents used are the arrival of the Goths at the gates of Rome, the Famine, the last efforts of the besieged, the Treaty of Peace, the introduction of the Dragon of Brass, and the collection of the ransom,— most of these accounts being founded on the chronicles of Zosimus.",
            book_path: "/book2",
            author_name: "By Aristophanes",
            rating: "",
            views: ""
        },
        {
            image_name: "The Comedies of Terence",
            image: "book3.jpg",
            image_path: "/images/humor/book3.jpg",
            Description: "u doing? Why are you going to destroy yourself? Then she, so that you might easily recognize their habitual attachment, weeping, threw herself back upon him-- how affectionately!SOS. What do you say? SIM. I returned thence in anger, and hurt at heart: and {yet there was} not sufficient ground for reproving him. He might say;What have I done? How have I deserved {this}, or offended, father? She who wished to throw herself into the flames, I prevented; I saved her. The defense is a reasonable one.SOS. You judge aright; for if you censure him who has assisted to preserve life, what are you to do to him who causes loss or misfortune {to it}?SIM. Chremes comes to me next day, exclaiming: 'Disgraceful conduct!'-- that he had ascertained that Pamphilus was keeping this foreign woman as a wife. I steadfastly denied that to be the fact. He insisted that it was the fact. In short, I then left him refusing to bestow his daughter.SOS. Did not you then {reprove} your son?",
            book_path: "/book3",
            author_name: "By Publius Terentius Afer",
            rating: "",
            views: ""
        }
    ],

    gk: [
        {
            image_name: "GENERAL KNOWLEDGE",
            image: "book1.jpg",
            image_path: "/images/gk/book1.jpg",
            Description: "This book aims to enhance the General Knowledge of all its readers, particularly the student fraternity and is an honest effort towards covering all genres of general awareness that may come handy for candidates of various competitive examinations.Topics Covered Physical and World Geography  Geography of India  World History  History of India  Indian Polity and Governance  Indian Economy  International Organisations  National Insignia and Symbols  Important Facts about India  Science  Computers and Information Technology  Sports/Games/Films/Television  Basic General Knowledge  Multiple Choice QuestionsUSP & Features Simple & Lucid language. The book has been divided into different chapters based on the subjects of study mentioned above to make it as reader-friendly as possible. At the end of the book, a combined series of Multiple Choice Questions with Answers as been provided, which is a unique mix of all the chapters to provide a thorough revision of the entire book.  Written in accordance with the syllabus of various competitive exams & based on current trends in GK section set by the UPSC & other state bodies.Audience  Aspirants of Civil services & State Civil Services, Combined Defence Services, Indian Engineering Services, Institute of Banking Personnel Selection Examination  MBA, MCA candidates  Candidates appearing for interviews for jobs of all kinds  Student of all ages.",
            book_path: "/book1",
            author_name: "EDITORIAL BOARD",
            rating: " ",
            views: " "

        },
        {
            image_name: "CHILDREN'S ENCYCLOPEDIA - GENERAL KNOWLEDGE",
            image: "book2.jpg",
            image_path: "/images/gk/book2.jpg",
            Description: "This book aims to enhance the General Knowledge of all its readers, particularly the student fraternity. It is honest effort towards covering all genres of general awareness that may come handy for contestants of various competitive examinations, such as:• Civil services & State Civil Services• Bank PO• Combined Defence Services• Indian Engineering Services• Institute of Banking Personnel Selection Examination• National Defence Academy • Staff Selection Commission • Railway Recruitment Board • LIC Administrative Examination • MBA, MCA Entrance Examinations • TOEFL or the Test of English as a Foreign Language • IELTS or International English Language Testing System • GMAT or the Graduate Management Admission Test & CAT or the Common Admission Test and and much more.The book has been broadly divided into different chapters based on the subjects of study mentioned above to make it as reader-friendly as possible. At the end of the book, is a combined series of Multiple Choice Questions or MCQs which is a unique mix of all the chapters to provide a thorough revision of the entire book. Hence readers, the book is a real treasure trove of valuable information for all, particularly the youngsters in schools and colleges – and all those who aspire to make it big in their lives!A regular revision of all chapters and latest editions of the book is advised to keep up to date with information of all kinds. We wish all aspirants good luck for their future endeavours",
            book_path: "/book2",
            author_name: "by MANASVI VOHRA ",
            rating: "",
            views: ""
        },
        {
            image_name: "The Greatest General Knowledge Quiz Book",
            image: "book3.jpg",
            image_path: "/images/gk/book3.jpg",
            Description: "What does the average human head weigh? From where in the United Kingdom did the Titanic set off on her maiden voyage? Can you name the manager who took charge of the England football team in 1977? In which year did the United Kingdom first win the Eurovision Song Contest with Sandie Shaw’s ‘Puppet on a String’? If you can answer these questions and more like them, then The Greatest General Knowledge Quiz Book is for you. You’ll never realise how much you don’t know until you have dipped inside this book and tried to answer the 250 questions, designed to test your knowledge on a broad range of subjects. Packed with fascinating facts, this book aims to be educational as well as fun and is an easy way to learn. So whether you want to test yourself against the kids or broaden your general knowledge in time for the next pub quiz, this book is a must have for all ages.",
            book_path: "/book3",
            author_name: "Chris Cowlin",
            rating: "",
            views: ""
        }
    ],
    adventure: [
        {
            image_name: "Adventure After",
            image: "book1.jpg",
            image_path: "/images/adventure/book1.jpg",
            Description: "Born and raised in a loving home, Trudi seemed to have the perfect life. Until one day when she was eleven years old, a tragic death in the family changed the trajectory of her life forever. As if that wasn't enough, further devastation crashed through Trudi's life, leaving her without any close family by the time she reached her mid-thirties. She was all alone. What follows is an inspiring transformation, as Trudi built a new life by going where her heart and her feet lead her - from country music concerts in Nashville and hockey games in Canada to thermal springs in Iceland and the legendary Camino de Santiago.Adventure After is Trudi's story of how she faced her grief throughout the years. With her adventurous spirit, she searched the world to discover what mattered the most to her and found her way back to herself.A compelling read for those who have experienced the loss of a dear family member(s). An honest, raw look at the author's resilience in building a full life after she lost her family.Trudi is a life-after-grief coach. Her superpower is her ability to let you be seen and heard by listening deeply and tapping into her intuition. She loves to connect women back to their inner power so they can be their best selves. She lives in Colorado with her husband and their cherished dogs.",
            book_path: "/book1",
            author_name: "By Trudi Remer; Renee Boelcke (other)",
            rating: "",
            views: ""
        },
        {
            image_name: "Adventure",
            image: "book2.jpg",
            image_path: "/images/adventure/book2.jpg",
            Description: "Jack London’s novel first published in 1911 is a devastating portrayal of copra plantation slavery.",
            book_path: "/book2",
            author_name: "Jack London",
            rating: "",
            views: ""
        },
        {
            image_name: "Adventure",
            image: "book3.jpg",
            image_path: "/images/adventure/book3.jpg",
            Description: "Though novelist Jack London is best known for the paean to natural wonder that is The Call of the Wild, he had an activist side, as well. In Adventure, London describes and skewers the plantation system of The Solomon Islands in a devastating take-down that is equal parts adventure tale and social justice tract.",
            book_path: "/book3",
            author_name: "By Jack London",
            rating: "",
            views: ""
        }
    ]
}

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
            return res.json(false);
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
        const signupuser = await User.findOne({
            where: {
                username: Username,
            }
        })
        if (signupuser) {
            return res.json(false);
        }
        const userdatafetching = await User.create({
            username: Username,
            password: Password,
        })
        const findingid = await User.findOne({
            where: {
                username: Username,
            }
        })
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
    const {Bookid,Userid } = req.body;
    // for (let i in cart) {
    //     if (cart[i].heading == heading) {
    //         return res.json(false);
    //     }
    // }
    // var tempcart = {
    //     "image_path": imagepath,
    //     "heading": heading,
    // }
    // cart.push(tempcart);
    try {
        var books = await Book.findOne({
            where: {
                 id:Bookid
            }
        })
       const cart =await Cart.findOne( {where:{id:Userid }} )
       cart.bookId.push(books)
       const user=await Cart.update({
        bookId: cart.bookId
       },{
        where:{id:Userid }
       });
    } catch(e) {
        console.log("fetching error in cart page",e);
    }
    return res.json({ success: true });
})
//delete cart 
app.delete("/books/types/addtocart/delete", async (req, res) => {
    const imagepath = req.body.image_path;
    const Heading = req.body.heading;
    const id = req.body.id
    const del = {
        "imagepath": imagepath,
        "heading": Heading
    }
    for (let i in cart) {
        if (cart[i].heading == del.heading) {
            cart.splice(i, 1);
        }
    }
    //    await Cart.destroy({where:{UserId:id}});//
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
    try {
        const { bookType } = req.params;
        const fetchingdata = await Book.findAll({
            where: {
                bookType: bookType
            }
        })
        res.send(fetchingdata);
    }
    catch (e) {
        console.log("error in fetching data", e);
    }
});
//get cart
app.get("/viewcart/:getdata", async (req, res) => {
    res.send(cart);
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