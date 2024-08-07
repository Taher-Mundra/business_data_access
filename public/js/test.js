document.getElementById("netProfitMarginWeight").value = jsonResponse.Weights['Net Profit Margin'].Current
document.getElementById("grossProfitMarginWeight").value = jsonResponse.Weights['Gross Profit Margin'].Total
document.getElementById("operatingProfitMarginWeight").value = jsonResponse.Weights['Operating Profit Margin'].Total
document.getElementById("returnOnAssetsWeight").value = jsonResponse.Weights['Return on Assets'].Total
document.getElementById("returnOnEquityWeight").value = jsonResponse.Weights['Return on Equity'].Total
document.getElementById("cashFlowMarginWeight").value = jsonResponse.Weights['Cash Flow Margin'].Total
document.getElementById("currentRatioWeight").value = jsonResponse.Weights['Current Ratio'].Total
document.getElementById("quickRatioWeight").value = jsonResponse.Weights['Quick Ratio'].Total
document.getElementById("cashRatioWeight").value = jsonResponse.Weights['Cash Ratio'].Total
document.getElementById("operatingCashFlowRatioWeight").value = jsonResponse.Weights['Operating Cash Flow Ratio'].Total
document.getElementById("workingCapitalWeight").value = jsonResponse.Weights['Working Capital'].Total
document.getElementById("debtToEquityRatioWeight").value = jsonResponse.Weights['Debt to Equity'].Total
document.getElementById("debtToAssetWeight").value = jsonResponse.Weights['Debt to Asset'].Total
document.getElementById("equityRatioWeight").value = jsonResponse.Weights['Equity Ratio'].Total
document.getElementById("leverageWeight").value = jsonResponse.Weights['Leverage'].Total
document.getElementById("interestCoverageRatioWeight").value = jsonResponse.Weights['Interest Coverage Ratio'].Total
document.getElementById("assetTurnoverRatioWeight").value = jsonResponse.Weights['Asset Turnover Ratio'].Total
document.getElementById("cogsToRevenueRatioWeight").value = jsonResponse.Weights['COGS to Revenue Ratio'].Total
document.getElementById("operatingExpenseRatioWeight").value = jsonResponse.Weights['Operating Expense Ratio'].Total
document.getElementById("payrollToRevenueWeight").value = jsonResponse.Weights['Payroll to Revenue'].Total
document.getElementById("daysPayableOutstandingWeight").value = jsonResponse.Weights['Days Payable Outstanding'].Total


console.log(netProfitMarginWeight +' , '+ grossProfitMarginWeight +' , '+ operatingProfitMarginWeight +' , '+ returnOnAssetsWeight +' , '+ returnOnEquityWeight +' , '+ cashFlowMarginWeight +' , '+ currentRatioWeight +' , '+ quickRatioWeight +' , '+ cashRatioWeight +' , '+ operatingCashFlowRatioWeight +' , '+ workingCapitalWeight +' , '+ debtToEquityRatioWeight +' , '+ debtToAssetWeight +' , '+ equityRatioWeight +' , '+ leverageWeight +' , '+ interestCoverageRatioWeight +' , '+ assetTurnoverRatioWeight +' , '+ cogsToRevenueRatioWeight +' , '+ operatingExpenseRatioWeight +' , '+ payrollToRevenueWeight +' , '+ daysPayableOutstandingWeight)

netProfitMargin: netProfitMarginWeight,
grossProfitMargin: grossProfitMarginWeight,
operatingProfitMargin: operatingProfitMarginWeight,
returnOnAssets: returnOnAssetsWeight,
returnOnEquity: returnOnEquityWeight,
cashFlowMargin: cashFlowMarginWeight,
currentRatio: currentRatioWeight,
quickRatio: quickRatioWeight,
cashRatio: cashRatioWeight,
operatingCashFlowRatio: operatingCashFlowRatioWeight,
workingCapital: workingCapitalWeight,
debtToEquityRatio: debtToEquityRatioWeight,
debtToAsset: debtToAssetWeight,
equityRatio: equityRatioWeight,
leverage: leverageWeight,
interestCoverageRatio: interestCoverageRatioWeight,
assetTurnoverRatio: assetTurnoverRatioWeight,
inventoryTurnover: inventoryTurnoverWeight,
cogsToRevenueRatio: cogsToRevenueRatioWeight,
operatingExpenseRatio: operatingExpenseRatioWeight,
payrollToRevenue: payrollToRevenueWeight,
daysPayableOutstanding: daysPayableOutstandingWeight

{"_id":{"$oid":"661bdd22891870cda40f374c"},"Industry":"Food Service","Weights":{"cashFlowMargin":{"$numberInt":"15"},"debtToAsset":{"$numberInt":"20"},"debtToEquity":{"$numberInt":"25"},"grossProfitMargin":{"$numberInt":"20"},"grossRevenue":{"$numberLong":"60"},"netProfitMargin":{"$numberLong":"70"},"returnOnAssets":{"$numberInt":"10"},"returnOnEquity":{"$numberInt":"10"},"assetTurnoverRatio":{"$numberInt":"15"},"cashRatio":{"$numberInt":"15"},"cogsToRevenueRatio":{"$numberInt":"20"},"currentRatio":{"$numberInt":"20"},"daysPayableOutstanding":{"$numberInt":"30"},"equityRatio":{"$numberInt":"15"},"interestCoverageRatio":{"$numberInt":"20"},"inventoryTurnover":{"$numberLong":"25"},"leverage":{"$numberInt":"20"},"operatingCashFlowRatio":{"$numberInt":"30"},"operatingExpenseRatio":{"$numberInt":"25"},"operatingProfitMargin":{"$numberInt":"50"},"payrollToRevenue":{"$numberInt":"20"},"quickRatio":{"$numberInt":"25"},"workingCapital":{"$numberInt":"10"}},"Business_stage":"Early Growth"}
        