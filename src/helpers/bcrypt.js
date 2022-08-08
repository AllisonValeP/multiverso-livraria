const {compareSync, hashSync} = require("bcrypt");

const bcrypt = {
 generateHash: (text)=>{
    return hashSync(text, 10);
 },
 compareSync: (text, heshed)=>{
    return compareSync(text, heshed);
},
};
module.exports = bcrypt;