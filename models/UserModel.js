
const mongoose = require('../config/database');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String,
    type: {
        type: Number,
        default: 3
    },
    isVerify: {
        type: String,
        default: null
    },
    products: {
        type: [ String ],
    
    }
}, {

    collection: 'user'
});


var UserModel = mongoose.model('user', UserSchema);



module.exports = UserModel;