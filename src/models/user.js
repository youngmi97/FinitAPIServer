const mongoose = require('mongoose');
import { hash } from 'bcryptjs';

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    name: String,
    password: String
}, {
    timestamps: true
});


// pre hook --> called before model is saved
// have to use the function callback to prevent global reference
// 'this' will refer to the User that is being handled
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {

        try {
            this.password = await hash(this.password, 10)
            next()
        } catch (err) {
            next(err)
        }
    }
    next()
})

export default mongoose.model("User", userSchema);