// mongoDB injection attack

//  never trust user input 
// always validate data type (string , integer)
// mongo operator($ne, $gt, $lt, $in, $nin)


// Cross site Scripting (XSS) attack

// output escaping is must 
// never trust user html 
//  user csp (Content Security Policy) 


// mongo store creating 

const session = require("express-session");
const MongoStore = require("connect-mongo");


app.use(session({
    secret:"secret123",
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost:127.0.0.1:27017/authDemo",
    }),
    cookie:{
        httpOnly:true,
        secure:false,
    },
}),
);


// helmet
// xss protection 
//  click jacking
// https server 
//  hide server info 
// secure session 
// use httpOnly cookie
// secure flag should be on 
// session regenerate 

// IIS -> Internet Information Services 
//  common iis ports : 80 to  443
// benefits of IIS :
// 1- security
// 2- scalability 
// 3- reliability 
// 4- support for multiple languages and frameworks


