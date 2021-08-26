const User = require("../models/user");

const getUser = async (req, res) => {
    if (!req.params.address) {
        return res.status(400).json({ error: "invalid request" });
    }

    const user = await User.findOne({address:req.params.address});
    if (!user) {
        return res.status(404).json({ error: "user not found" });
    }
    res.send(user);
};

module.exports = {
    getUser,
};
