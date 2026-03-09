const Entry = require("../models/Entry")

exports.addEntry = async (req,res) => {

  try{

    const entry = new Entry(req.body)
    await entry.save()

    res.json(entry)

  } catch(err){
    res.status(500).json({error: err.message})
  }

}

exports.getEntries = async (req,res) => {

  try{

    const entries = await Entry.find().sort({createdAt:-1})
    res.json(entries)

  } catch(err){
    res.status(500).json({error: err.message})
  }

}