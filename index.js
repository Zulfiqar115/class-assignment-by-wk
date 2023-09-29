/*function carMaintenance(callback:(Text:string)=> void){
    console.log("I leave my car at 9 in workshop");
    setTimeout(() =>{
        console.log("car is ready...");
        callback("your car is ready");
    },2000)
}
function carMaintCallBack(text:string){
    console.log("Car Maint Call back...",text);
    //pickDress(dressCallBack);
}

function pickDress(callback: (text: string) => void){
setTimeout(()=> {
    console.log("your Dress is ready");
    callback("pick your Dress");
},100);
}
/*function dressCallBack(text:string){
    console.log("this is dress callback..",text);
   
}*/
// function attendEvent(cb:(text: string)=> void){
//     console.log("Now you can attend the event");
//     cb("Now yoy can go home");
// }
/*function eventCallBack(text:string){
     console.log(text);
     BacktoHome();
}*/
// carMaintenance(carMaintCallBack);
// setTimeout(()=>{
//     console.log("Do grocery");
// }, 0);
// function BacktoHome(){
//     console.log("reached home")
// }
//=============================================//
//callback hell//
/*carMaintenance(function(text:string){
    console.log("car Maint Call back...",text);
    pickDress(function(test:string){
        console.log("this is dress callback..",text);
        attendEvent(function (test:string){
            console.log(text);
            BacktoHome();
        })
    })
})*/
//============================= promises//
// function carMaintenance() {
//     console.log("I leave my car at 9 in workshop");
//     let result: Promise<string> = new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             console.log("car is fixed...");
//             resolve("your car is ready");
//         }, 2000);
//     });
//             return result;
//  }
//              function pickDress1() {
//                  let Promise: Promise <string> = new Promise ((resolve, reject) =>{
//                      setTimeout(()=>{
//                          console.log("your Dress is ready");
//                          resolve("pick your dress");
//                      }, 100);
//                  });
//                 return Promise;            
//             }
//             carMaintenance()
//             pickDress1()
function carMaintenance1() {
    console.log("I leave my car at 9 in workshop");
    var result = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 2000);
    });
    return result;
}
function pickDress1() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Your Dress is ready");
            resolve("pick your dress");
        }, 100);
    });
    return promise;
}
