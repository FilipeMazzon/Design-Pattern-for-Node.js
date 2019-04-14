const path = require('path');
const FS_Proxy = require('./FS_Proxy');

const fs = new FS_Proxy(require('fs'));

const txtFile = path.join(__dirname,'readme.txt');
const mdFile = path.join(__dirname,'readme.md');
(async ()=>{
    try{
        let content="";
        content += await fs.readFile(txtFile,'UTF-8');
        content += await fs.readFile(mdFile,'UTF-8');
        console.log("Reading Files");
        console.log(content);
    }catch (err) {
        console.log(err);
    }
})();