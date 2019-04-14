class FS_Proxy {
    constructor(fs_subject){
        this.fs = fs_subject;
    }
    readFile(path,format){
        return new Promise((resolve,reject)=>{
            if(!path.match(/.md$|.MD$/)){
                reject(`Can only read Markdown Files.`);
            }
            this.fs.readFile(path,format,(error,contents)=>{
                if(error){
                    reject(error);
                }
                resolve(contents);
            })
        });

    }
}

module.exports = FS_Proxy;