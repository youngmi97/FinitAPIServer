// User session authentication helper functions 

import { AuthenticationError } from 'apollo-server-express'
import { User } from './models'
const dotenv = require('dotenv').config({path: require("find-config")(".env")})

export const attemptSignIn = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new AuthenticationError('Incorrect Email!')
    }

    if (!await user.matchesPassword(password)) {
        throw new AuthenticationError('Incorrect Password!')
    }

    return user
}


const signedIn = req => req.session.userId

export const checkSignedIn = req => {
    if (!(signedIn(req))) {
        throw new AuthenticationError('You must be signed in')
    }
}

export const checkSignedOut = req => {
    if (signedIn(req)) {
        throw new AuthenticationError("You must be signed in");
    }
}

export const signOut = (req, res) => new Promise((resolve, reject) => {
     req.session.destroy( err => {
       if (err) reject(err)

       res.clearCookie(process.env.SESS_NAME)

       resolve(true)
     });
})