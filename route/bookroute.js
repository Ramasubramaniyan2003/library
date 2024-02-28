const express=require('express');
const app=express();
const path=require('fs');
const { Module } = require('module');

app.get('/book1',(req,res)=>{
    res.download('books/book1.pdf',(error)=>{
       console.log(err);
    });
   })
   app.get('/book2',(req,res)=>{
       res.download('books/book1.pdf',(error)=>{
           console.log(err);  
       });
   })
   app.get('/book3',(req,res)=>{
       res.download('books/book2.pdf',(error)=>{
           console.log(err);
       });
   })
   Module.exports=app;