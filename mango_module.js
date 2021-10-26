
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://ghaliany:VFUqD-PNyd6_A2P@cluster0.ud3j9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

 MongoClient.connect(url, function(err, db) {

 /**
  * Find all paramiter from callections
  * @param callection name
  * @param result
  */
    function Find_Callection(callection){
        if (err) throw err;
        var dbo = db.db("barfas");
        dbo.collection(callection).find({}).toArray(function(err, result) {
          if (err) throw err;
          var filditems =  result
          exports.filditems=filditems
          db.close();
        });
    }
 
/**
 * make a callection for proprtys
 */
 function make_Callections(CallectionName){
  if (err) throw err;
  var dbo = db.db("barfas");
  dbo.createCollection(CallectionName, function(err, res) {
    if (err) throw err;
    const sms = "Collection created!";
    exports.sms=sms
    db.close();
  });

 }
/**
 * Insert to callections
 *
 */
 function Insert(CallectionName,data){
  if (err) throw err;
  var dbo = db.db("barfas");
  dbo.collection(CallectionName).insertOne(data, function(err, res) {
    if (err) throw err;
    const smsinsert = "1 document inserted";
    exports.smsinsert=smsinsert
    db.close();
  });

 }

 /**
 * Find with qurey
 *
 */
  function Find_Filter(CallectionName,data){
    if (err) throw err;
    var dbo = db.db("barfas");
    dbo.collection(CallectionName).find(data).toArray(function(err, result) {
      if (err) throw err;
      const itemsfilter = result
      exports.itemsfilter = itemsfilter
      db.close();
    });
  
   }


   /**
    * exporsts functions
    * 
    */
    exports.Find_Callection=Find_Callection
    exports.make_Callections=make_Callections
    exports.Insert=Insert
    exports.Find_Filter=Find_Filter

  });
