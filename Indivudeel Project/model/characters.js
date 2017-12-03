const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

const Character = mongoose.model('characters', CharacterSchema);


module.exports={
    Characters: Character
    , CharacterSchema : CharacterSchema
};