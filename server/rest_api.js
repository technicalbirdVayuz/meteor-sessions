import { Meteor } from 'meteor/meteor';
import express from 'express';
import { WebApp } from 'meteor/webapp';

import {Todo} from './../collections/collections.js';
var Fiber = require('fibers');

const app = express();
app.use(express.json());


function callSmsGatewayAPI(){

  
 return new Promise((resolve, reject) => {

var request = require("request");

var options = { method: 'GET',
  url: 'https://ce5.herokuapp.com/fetchMainGuideScreen',
  headers: 
   { 'postman-token': 'd9f83f67-9db6-c75d-52df-84cf427a3c99',
     'cache-control': 'no-cache' } };
	request(options, function (error, response, body) {
	  if (error) reject(error);

      resolve(body);
	});
  });
}


app.get('/firstApi',(req,res)=>{
    return res.status(200).send({code: 404 , button_text: 'New Button.'});   
})

app.get('/fetchByName', async(req,res)=>{
	var todoData = await callSmsGatewayAPI();
	console.log(todoData);
    return res.status(200).send({code: 200 , result:todoData});   
})	


app.post('/fetchByName',(req,res)=>{
	Fiber(function(){
		var query = req.body.query;
		console.log(query);
		var todoData = Todo.find({name:query}).fetch();
	    return res.status(200).send({code: 200 , result:todoData});   
	}).run()
})	



app.get('/fetch_All_tasks', async(req,res)=>{
	var todoData = Todo.find({}).fetch();
    return res.status(200).send({code: 200 , result:todoData});   
})	


WebApp.connectHandlers.use(app);
