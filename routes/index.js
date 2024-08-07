const express = require('express')
const router = express.Router();
const userDataHistory = require('../models/UserDataHistory.js')

router.get('/feedback',(req,res) => {
    res.render('feedback');
})

router.get('/data',async (req,res) => {
    let companyList;
    try {
        companyList = await userDataHistory.distinct('Company')   
    } catch (error) {
        console.log(error)
    }
    console.log(companyList)
    res.render('data',{companyList: companyList});
})

router.get('/data/fetchReport',async (req,res) => {
    let companyId = req.query.companyId;

    let yearAndMonth = req.query.yearAndMonth;

    if(companyId == undefined || yearAndMonth == undefined || companyId == null || yearAndMonth == null){
        return res.status(400).json({error: "Please select the companyId and yearAndMonth"})
    }
    let userDataHistoryDoc;
    try {
        userDataHistoryDoc = await userDataHistory.findOne({Company: companyId, yearAndMonth: yearAndMonth})   
    } catch (error) {
        return res.status(400).json({error: "Error in getting user Data History"})
    }
    console.log(userDataHistoryDoc)
    if(!userDataHistoryDoc){
        return res.status(400).json({error: "The user Data for this Month was not found"});
    }

    return res.status(200).json({userDataHistory: userDataHistoryDoc});
})

module.exports = router