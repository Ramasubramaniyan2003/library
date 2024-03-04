const {User}=require('./users');
const {Cart}=require('./carts');
const {Book}=require('./books');
const{Author}=require('./authors')
const {sq}=require('../config/db');

User.hasOne(Cart);
Cart.belongsTo(User);
// Book.belongsToMany(Cart,{through:"Bookviewcart"});
// Cart.belongsToMany(Book,{through:"Bookviewcart"});
Author.hasMany(Book);
Book.belongsTo(Author);
sq.sync().then( 
    ()=>{
        console.log("table created");
    }
).catch(
    ()=>{
        console.log("error")
    }
)
module.exports={
    User,
    Cart,
    Book,
    sq,
    Author
}
