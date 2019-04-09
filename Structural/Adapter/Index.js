const localStorage = require('./LocalStorage');
console.log(`LocalStoragelength:${localStorage.length}`);
const uid = localStorage.getItem("user_id");
console.log(`user_id:${uid}`);
if(!uid){
    console.log(`User ID not found. Setting the user id and token...`);
    localStorage.setItem("token","SDADSUHDHUDASHUDSAADSOKDASOHDASIJOIASOIDAJS");
    localStorage.setItem("user_id","12345");
}else{
    console.log(`User ID found ${uid}`);
    console.log(`clearning the user ID`);
    localStorage.clear();
}