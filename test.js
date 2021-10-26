
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://ghaliany:VFUqD-PNyd6_A2P@cluster0.ud3j9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

 MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("barfas");
  var myobj = { name: "Company Inc",
   address: "Highway 37" ,
   "door1" : {
     Name : "doorboos",
     Sn : "32123"
   }
  };
  dbo.collection("user").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
 
   


   /**
    * exporsts functions
    * 
    */

    //exports.make_Callections=make_Callections

  });
