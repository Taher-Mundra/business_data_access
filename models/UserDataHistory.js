const mongoose = require('mongoose')

const UserDataHistorySchema = mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: [true,'Please enter the userID']
    // },
    Company: {
        type: String,
        ref: 'Company',
        required: [true,'Please enter the realmId of the company']
    },
    yearAndMonth: {
        type: String,
        required: [true,"Please enter the month and year of data"]
    },
    profitAndLossThisMonth: {
        type: Object
    },
    balanceSheetThisMonth: {
        type: Object
    },
    cashFlowFromOperationsData: {
        type: Object
    },
    balanceSheetThisMonthStart: {
        type: Object
    },
    dataMetrics: {
        type: Object
    },
    margins: {
        type: Object
    }
})

module.exports = mongoose.model('UserDataHistory',UserDataHistorySchema);