let mongoClient = require('mongodb').MongoClient;

//! connect to mongodb.============================================================

let url = 'mongodb+srv://demofile:9XfQn9H1XTTzXEt3@cluster0.trwtob7.mongodb.net/?retryWrites=true&w=majority'; 

mongoClient.connect(url , (err , myMongoClient)=>{
    if(err){
        console.log('Connection failed');
    } else {
        console.log('Connection with mongodb succesful.');
        //insertData(myMongoClient);
        //deleteoneData (myMongoClient);
        //deleteallitem (myMongoClient);
        //findOneItem (myMongoClient);
        //findAllData(myMongoClient);
        //projectionData(myMongoClient);
        //findAlldataByQuery(myMongoClient);
        //findAlldataByLimit(myMongoClient);
        //findAlldataBySort(myMongoClient);

        //* new part*******************
        // updateData(myMongoClient);
        //createNewCollection(myMongoClient);
        //deleteCollection(myMongoClient)
    }
});


//!insert data======================================================================

function insertData (myMongoClient){
   let myDataBase = myMongoClient.db('School');
   let myCollection = myDataBase.collection('students');

   let myData ={
        name :" Ahosan",
        age:24,
        class: "honrs",
        Roll: 1,
        city:"Ggajipur"
    };

    myCollection.insertOne(myData, (err)=>{
        if(err){
            console.log("connection failed");
        } else {
            console.log("succesfully connected to insert data");
        }
    });
};


//! Delete One data======================================================================

function deleteoneData (myMongoClient){
    myDataBase = myMongoClient.db('School');
    myCollection = myDataBase.collection('students');

    let deleteItem = {Roll:2};

    myCollection.deleteOne(deleteItem, (err)=>{
        if(err){
            console.log("data delete fail");
        } else {
            console.log("data delete succesfully");
        }
    });
};

//! Delete All data======================================================================

function deleteallitem (myMongoClient){
    myDataBase = myMongoClient.db('School');
    myCollection = myDataBase.collection('students');

    myCollection.deleteMany((err , resultObj)=>{
        if(err){
            console.log("Sorry! delete failed some reason");
        }else{
            console.log(resultObj);
        }
    });
};

//! find One data without clue======================================================================

// function findOneItem (myMongoClient){
//     myDataBase = myMongoClient.db('School');
//     myCollection = myDataBase.collection('students');

//     let findObj = {};

//     myCollection.findOne(findObj,(err , result)=>{
//         if(err){
//             console.log('failed to connect with mongodb');
//         }else{
//             console.log(result);
//         }
//     });
// };

//! find One data with clue======================================================================

function findOneItem (myMongoClient){
    myDataBase = myMongoClient.db('School');
    myCollection = myDataBase.collection('students');

    let findObj = {"Roll": 3};

    myCollection.findOne(findObj,(err , result)=>{
        if(err){
            console.log('failed to connect with mongodb');
        }else{
            console.log(result);
        }
    });
};

//! find All data ======================================================================

function findAllData(myMongoClient){
    myDataBase = myMongoClient.db('School');
    myCollection = myDataBase.collection('students');

    myCollection.find().toArray((err , resultData)=>{
        if (err){
            console.log("failes to find data");
        } else{
            console.log(resultData);
        }
    });
};

//! get projection data with find() ======================================================================

function projectionData(myMongoClient){
    myDataBase = myMongoClient.db('School');
    myCollection = myDataBase.collection('students');

    let item = {};
    projectionInfo = {projection:{Roll:1, class:1, _id:0}};

    myCollection.find(item , projectionInfo).toArray((err, project)=>{
        if(err){
            console.log("Not found Projection Data.");
        } else {
            console.log(project);
        }
    });
};


//! get data with find() and query======================================================================

function findAlldataByQuery(myMongoClient){
   let myDataBase = myMongoClient.db('School');
   let myCollection = myDataBase.collection('students');

    //? it's case sensitive. If i don't give a space before ahosan then it's not showing the result. Because In mongodb database there is a space before ahosan. Whatever there it is , I have to write same thing.

    let query = {name:" Ahosan" , Roll:1};

    myCollection.find(query).toArray((err, dataQuery)=>{
        if(err){
            console.log("Sorry! Don't access.");
        } else{
            console.log(dataQuery);
        };
    });
};


//! get data with find() and limit()======================================================================

function findAlldataByLimit(myMongoClient){
    let myDataBase = myMongoClient.db('School');
    let myCollection = myDataBase.collection('students');

    //? That limit means, i can access the number of data which is defined by limit. if the limit is 3 that means i can access first 3 data from mongodb. If there is 100 data but i can access only 3 data.

    myCollection.find().limit(3).toArray((err, datalimit)=>{
        if(err){
            console.log("Sorry! Don't access.");
        } else{
            console.log(datalimit);
        };
    });
 };


 //! get data with sort()======================================================================

function findAlldataBySort(myMongoClient){
    let myDataBase = myMongoClient.db('School');
    let myCollection = myDataBase.collection('students');

   let sortItem = {name:1};

    myCollection.find().sort(sortItem).toArray((err, dataSort)=>{
        if(err){
            console.log("Sorry! Don't access.");
        } else{
            console.log(dataSort);
        };
    });
 };




 //* new part start from here  *****************************************************************

 //! Update data ======================================================================

function updateData(myMongoClient){
    let myDataBase = myMongoClient.db('School');
    let myCollection = myDataBase.collection('students');

   let dataQuery ={age: 24}
   let dataNew = {$set: {name: 'Ahosan kabir riad' , city: "Pabna"}}

    myCollection.updateOne(dataQuery , dataNew ,(err, dataUpdate)=>{
        if(err){
            console.log("Sorry! Don't access.");
        } else{
            console.log(dataUpdate);
        };
    });
};



//! Creating new Collection data ======================================================================

function createNewCollection(myMongoClient){
    let myDataBase = myMongoClient.db('School');
    myDataBase.createCollection("Teachers ", (err , dataCollection)=>{
        if(err){
            console.log("New data Collection failed to create.");
        } else{
            console.log(dataCollection);
        };
    });
};


//! Delete Collection data ======================================================================

function deleteCollection(myMongoClient){
    let myDataBase = myMongoClient.db('School');

    myDataBase.dropCollection("Teachers", (err , dataDelete)=>{
        if(err){
            console.log("Data Collection failed to delete.");
        } else{
            console.log(dataDelete);
        };
    });
};