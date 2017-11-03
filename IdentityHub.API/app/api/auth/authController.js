const User = require('../../models/user'),
    jwt = require('jsonwebtoken'),
    config = require('../../config/config'),
    crypto = require('crypto');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

exports.token = function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { return res.status(400).json({ error: "bad data" }); }
        if (!user) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) { return res.status(400).json({ error: "bad data" }); }
            if (!isMatch) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }

            let userInfo = user.toJson();
            res.status(200).json({
                token: 'Bearer ' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
}
exports.register = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        if (existingUser) {
             return res.status(422).send({ error: 'That email address is already in use for this client.' });
        } else {
            let user = new User({
                email: email,
                password: password,
            });
            user.save(function (err, user) {
                if (err) { return next(err); }
                let userInfo = user.toJson();
                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo
                });
            });
        }
    });

}
exports.authorize = function (req, res, next) {
    res.status(200).json({status:'Not Implemented'})
}
exports.providerToken = function (req, res, next) {
    res.status(200).json({status:'Not Implemented'})
}