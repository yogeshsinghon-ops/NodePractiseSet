const { error } = require('console');
const fs=require('fs');
console.log("1..Start Compiling");
console.log('2...Reading File Synchronise');
const dataSynch=fs.readFileSync('MyUser.txt','utf-8');
console.log("3...Reading complete Synchronise");

console.log("4...Reading File Asynchronise");
const dataAsync=fs.readFile("MyUser.txt",'utf-8',err=>{
    if(err){
        throw err;

    }
    console.log("6...synchrouns Complete");
});
console.log("5...compil completed"  );