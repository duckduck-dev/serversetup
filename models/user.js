const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
const bcrypt  = require('bcrypt');


//User Model
const userSchema = new Schema( {
    email : {
                    type : String,
                    unique : true,
                    lowercase : true
                },
    password : String 
} );

//on save Hook, encrypt password

userSchema.pre('save',  function(next) {
    const user = this;

     bcrypt.hash(user.password, 10, (err, hash) => {
      if (err)  return next(err);
      
      user.password = hash;
      next();
     });
   });

userSchema.methods.comparePassword = async (candidatePassword, callback) =>{
    try {
        const isMatch = await bcrypt.compare( candidatePassword, this.password );
        return callback(null, isMatch); 
        }
    catch(err){
        return callback(err);
    }
    

};


//create a model class
 const model = mongoose.model('user', userSchema);

//Export the model
module.exports = model;
