const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print , args) {
    print(args);
    
}

function ls(print) {
    fs.readdir('.',(error,files)=>{
        if(error){
            throw new Error("Mensaje de error"); 
        }
        else{
            const filesAsString = files.join("")
            print(filesAsString)}

    
    })
   
}

function cat(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
     if(error){throw new Error("Mensaje de error")}else{print(data)}
    })

}

function head(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
        if(error){
            throw new Error("Mensaje de error")
        }
        else{ 
            
            const codeLines = data.split('\n')
            const firstLine = codeLines.slice(0,1);

            print(firstLine.join('\n'))

        }
    })
}

function tail(print,args) {
    fs.readFile(args, 'utf-8', (error,data)=>{
        if(error){
            throw new Error("Mensaje de error")
        }
        else{ 
            const lastLines = data.split('\n').at(-1).trim()

            print(lastLines)

        }
    })
}

function curl(print,args) {
    utils.request(args, (error,response)=>{
        if(error){
            throw new Error("Mensaje de error")
        }
        else{ 
            print(response)
        
        }
    })
 
    

}
module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
