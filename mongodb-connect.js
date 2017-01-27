const MongoClient = require('mongodb').MongoClient;
var User = {name:'Gautam',age:30};
//var obj = new objectID();
console.log(obj);
//var {name} =User;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
	if(error){

		console.log('Unable to connect to mongo db');
	}
		console.log('Connected to MongoDb Server');

	db.collection('Todos').insertOne({
		text:'something toi test',
		completed:false

	},(error,result)=>{

		if(error){
			console.log('error');
		}
			console.log(JSON.stringify(result.ops));
	});

	db.collection('user').insertOne({
		name:'Gautam',
		message:'test'
	},(error,result)=>{
		if(error){
			console.log('Error Message');
		}
			console.log(result.ops[0]._id.getTimestamp());

	})

	db.close();
});


