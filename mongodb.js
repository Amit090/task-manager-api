// const {MongoClient, ObjectId} = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'
// const id = new ObjectId()

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if(error){
//         console.log('Unable to connect to database')
//     }
//     console.log('Connection Successful')
//     const db = client.db(databaseName)


//     // db.collection('Users').insertOne({
//     //     _id: new ObjectId(),
//     //     name:'Rohit',
//     //     age:25
//     // },(error, result) => {
//     //     if(error){
//     //         console.log('Unable to insert User')
//     //     }

//     //     console.log(result)
//     // })


//     // db.collection('tasks').insertMany([{
//     //     description: 'Clean the house',
//     //     completed: true
//     // },{
//     //     description: 'Complete the homework',
//     //     completed: false
//     // },{
//     //     description: 'hoist the flag',
//     //     completed: false
//     // }],(error, result) => {
//     //     if(error){
//     //         console.log('result failure')
//     //     }
//     //     console.log(result)
//     // })


//     // db.collection('Users').findOne({ _id : new ObjectId('632468066d35708af321be63')}, (error, user) =>{
//     //     if(error){
//     //                 console.log('result failure')
//     //             }
//     //             console.log(user)
//     // })

//     // db.collection('Users').find({ age : 25}).toArray((error, users) => {
//     //     console.log(users)
//     // })

//     // db.collection('Users').find({ age : 25}).count((error, users) => {
//     //     console.log(users)
//     // })


//     // db.collection('tasks').findOne({_id: new ObjectId("6324657e013022452008d560")}, (error, task) => {
//     //     console.log(task)
//     // })

//     // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
//     //     console.log(tasks)
//     // })

// //    db.collection('tasks').updateOne({_id: new ObjectId("6324657e013022452008d55f")},
// //     {
// //         $set: {
// //             description: 'Dont Complete the homework'
// //         }
// //     }).then((result) =>{
// //         console.log(result)
// //     }).catch((error) => {
// //         console.log(error)
// //     })

//     db.collection('Users').updateOne({_id: new ObjectId("632468066d35708af321be63")},
//     {
//         $unset: {
//             id
//         }
//     }).then((result) =>{
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

//     // db.collection('tasks').updateMany({completed: false},
//     // {
//     //     $set: {
//     //         completed: true
//     //     }
//     // }).then((result) =>{
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // db.collection('Users').deleteMany({
//     //     name:'Amit'
//     // }).then((result) =>{
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // db.collection('Users').deleteOne({
//     //     _id: new ObjectId('63246831a39354070120e295')
//     // }).then((result) =>{
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })


// });
