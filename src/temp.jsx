const builder = require("../utils/builder");
const bcrypt = require("bcryptjs");
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient({
    // add your region 
region: 'eu-west-2', 
apiVersion: '2012-08-10',
});
const SALT_ROUND = 8;

// register user using name, username, password, email
async function register(name, username, password, email, age, nationality, maritalstatus, occupation){
if(!name || !username || !password || !email || !age || !maritalstatus || !occupation || !nationality){
return builder.buildResponse(400, {message: "Missing required fields"});
}

const foundUser = await getUser(username);
if(foundUser && foundUser.username){
return builder.buildResponse(400, {message: "User already exists"});
}

const hashedPass = bcrypt.hashSync(password.trim(), SALT_ROUND);
const newUser = {
name,
username,
password: hashedPass,
email,
age,
maritalstatus,
occupation,
nationality
};


const saveUserResponse = await saveUser(newUser);
if(!saveUserResponse) return builder.buildResponse(400, {message: "Server Error: Please try again later"});
return builder.buildResponse(200, {message: "User registered successfully"});
}

// retrieve user data via username from DynamoDB
const getUser = async (username)=>{
const params = {
Key: {
username: username
},
TableName: "login-database"
}

return await dynamoDB.get(params).promise().then((response)=>{
return response.Item;
}).catch((err)=>{
return err;
})
}

// save user in DynamoDB
const saveUser = async (user)=>{
const params = {
Item: user,
TableName: "login-database"
}
return await dynamoDB.put(params).promise().then(()=>{
return true;
}).catch((err)=>{
return err;
})
}

module.exports.register = register;
 