const Prof = require("../models/prof")
const User = require("../models/user")
const PurchaseHistory = require("../models/purchaseHistory")

function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function getProfNameById(profsId){ // a list of prof id
    var profsName = []
    for (let i = 0; i < profsId.length; i++){
        const prof = await Prof.findById(profsId[i]);
        profsName.push(prof.name);
    }
    return profsName;
}

async function getUserNameById(userId){
    const user = await User.findById(userId);
    return user.last_name + ' ' + user.first_name ;
}

async function cleanCourseMaterial(courseMaterials, buyerEmail){ // a list of course materials in json format
    var clean = []
    for (let i = 0; i < courseMaterials.length; i++){
        var courseMaterial = courseMaterials[i];
        var newMaterial = {}
        newMaterial.id = courseMaterial._id;
        newMaterial.price = courseMaterial.price;
        newMaterial.school = courseMaterial.institute;
        newMaterial.course = courseMaterial.course;
        newMaterial.cover_page = courseMaterial.coverPage;
        newMaterial.year = courseMaterial.year;
        newMaterial.semester = courseMaterial.semester;
        newMaterial.type = courseMaterial.type;
        newMaterial.prof = await getProfNameById(courseMaterial.profs);
        newMaterial.offer_by = await getUserNameById(courseMaterial.user);
        newMaterial.like = courseMaterial.like;
        newMaterial.unlike = courseMaterial.unlike;

        const buyer = await User.findOne({email: buyerEmail});
        if (buyer) {
            const purchase = await PurchaseHistory.find({user: buyer._id, material: courseMaterial._id})
            if (purchase && purchase[0]){
                if (purchase[0].rate){
                    newMaterial.status = 2
                }else{
                    newMaterial.status = 1
                }
            }else{
                newMaterial.status = 0;
            }
        }else{
            newMaterial.status = 0;
        }

        clean.push(newMaterial);
    }
    return clean;
}

module.exports = {
    makeid,
    getProfNameById,
    cleanCourseMaterial
}