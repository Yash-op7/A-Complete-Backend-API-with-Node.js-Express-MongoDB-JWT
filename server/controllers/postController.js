const Post = require('../models/postModels');

exports.getAll = async function(req, res) {
    let user = req.user;
    // let posts = await Post.find({user.email});
    res.status(200).json({
        success:true,
        message:'✅ this route is working.'
    });
}
exports.delete = async function(req, res) {
    let user = req.user;
    // let posts = await Post.find({user.email});
    res.status(200).json({
        success:true,
        message:'✅ this route is working.'
    });
}
exports.getById = async function(req, res) {
    let user = req.user;
    // let posts = await Post.find({user.email});
    res.status(200).json({
        success:true,
        message:'✅ this route is working.'
    });
}
exports.create = async function(req, res) {
    let user = req.user;
    // let posts = await Post.find({user.email});
    res.status(200).json({
        success:true,
        message:'✅ this route is working.'
    });
}
exports.update = async function(req, res) {
    let user = req.user;
    // let posts = await Post.find({user.email});
    res.status(200).json({
        success:true,
        message:'✅ this route is working.'
    });
}
