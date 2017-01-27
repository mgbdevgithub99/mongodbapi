const MongoClient = require('mongodb').MongoClient;
var User = {name:'Gautam',age:30};
//var obj = new objectID();
//console.log(obj);
//var {name} =User;
//console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
	if(error){

		console.log('Unable to connect to mongo db');
	}
		console.log('Connected to MongoDb Server');
/*
	db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));

	},(error)=>{

		console.log(JSON.stringify(error,undefined,2));

	});
*/
db.collection('Todos').find().count().then((count)=>{

console.log('get data '+count);

},(error)=>{
	
	if(error){
		console.log('Error');
	}
	

});

	db.close();

});


