const Institute = require("../models/institute")
const Prof = require("../models/prof")

async function getProfsByInstitute(req, res) {
  const {institute} = req.params;
  const instituteDoc = await Institute.findOne({name: institute});

  if (!instituteDoc)
    return res.json({data: []});

  const profDocs = await Prof.find({institute: instituteDoc._id});
  res.json({data: profDocs.map(doc => doc.name)});
}

module.exports = {
  getProfsByInstitute
};
