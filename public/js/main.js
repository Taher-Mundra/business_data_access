
if(document.getElementById('user_data_select_button')){
    document.getElementById('user_data_select_button').addEventListener('click',async (e) => {
        e.preventDefault();

        const yearAndMonth = document.getElementById('datePicker').value;
        const companyId = document.getElementById('company_select').value;

        if(yearAndMonth == undefined || companyId == undefined || yearAndMonth == '' || companyId == ''){
            document.getElementById('form-div-error-msg').style.color = 'red';
            document.getElementById('form-div-error-msg').innerHTML = 'Please select the companyId and yearAndMonth';
        }
        else{
            let year = yearAndMonth.split('-')[0]
            let month = yearAndMonth.split('-')[1]
            let yearAndMonthString = year+'-'+parseInt(month);
            const response  = await fetch(`http://localhost:3000/data/fetchReport?companyId=${companyId}&yearAndMonth=${yearAndMonthString}`)

            const data = await response.json()
            if(response.ok){
                const profitAndLossSection = document.getElementById('section1')
                const balanceSheetSection = document.getElementById('section2')
                const cashFlowSection = document.getElementById('section3')
                const balanceSheetThisMonthstartSection = document.getElementById('section4')
                const dataMetricsSection = document.getElementById('section5')
                const calculatedMarginsSection = document.getElementById('section6')

                processResponse(data.userDataHistory.profitAndLossThisMonth,profitAndLossSection)
                processResponse(data.userDataHistory.balanceSheetThisMonth,balanceSheetSection)
                processResponse(data.userDataHistory.cashFlowFromOperationsData,cashFlowSection)
                processResponse(data.userDataHistory.balanceSheetThisMonthStart,balanceSheetThisMonthstartSection)
                processSimpleJson(data.userDataHistory.dataMetrics,dataMetricsSection)
                processSimpleJson(data.userDataHistory.margins,calculatedMarginsSection)
            }
            else{
                document.getElementById('form-div-error-msg').style.color = 'red';
                document.getElementById('form-div-error-msg').innerHTML = data.error;
            }
        }
    })
}

const processResponse = (jsonObject,htmlDocument) => {
    if(!jsonObject){
        htmlDocument.innerHTML = "No Data Present"
    }
    else{
        if(!isDataPresent(jsonObject.Header.Option)){
            htmlDocument.innerHTML = "No Data Present"
        }
        else{
            if(jsonObject.Rows && jsonObject.Rows.Row){
                addRowsRecursively(jsonObject.Rows.Row,htmlDocument,0);
            }
        }
    }
}

const addRowsRecursively = async (jsonRows,htmlDocument,margin) => {
    for(var index in jsonRows){
        if(jsonRows[index].type == 'Section'){
            if(jsonRows[index].Header && jsonRows[index].Header.ColData){
                htmlDocument.innerHTML = htmlDocument.innerHTML + `<div style="border-bottom: 1px solid silver;" class="myflex"><p style="width: 50%;margin-left: ${margin}px; font-weight: 700;margin-bottom: 0px;">${jsonRows[index].Header.ColData[0].value}</p>
                <p style="width: 50%; font-weight: 700; margin-bottom: 0px;">${jsonRows[index].Header.ColData[1].value}</p>
                </div>`
            }
            if(jsonRows[index].Rows && jsonRows[index].Rows.Row){
                let newRowsObject = jsonRows[index].Rows.Row
                await addRowsRecursively(newRowsObject,htmlDocument,margin+40)
            }
            if(jsonRows[index].Summary && jsonRows[index].Summary.ColData){
                htmlDocument.innerHTML = htmlDocument.innerHTML + `<div style="border-bottom: 1px solid silver;" class="myflex"><p style="width: 50%;margin-left: ${margin}px; font-weight: 700;margin-bottom: 0px;">${jsonRows[index].Summary.ColData[0].value}</p>
                <p style="width: 50%; font-weight: 700;margin-bottom: 0px;">${jsonRows[index].Summary.ColData[1].value}</p>
                </div>`
            }
        }
        if(jsonRows[index].type == 'Data'){
            if(jsonRows[index].ColData){
                htmlDocument.innerHTML = htmlDocument.innerHTML + `<div style="border-bottom: 1px solid silver;" class="myflex"><p style="width: 50%;margin-left: ${margin}px;margin-bottom: 0px;">${jsonRows[index].ColData[0].value}</p>
                <p style="width: 50%;margin-bottom: 0px;">${jsonRows[index].ColData[1].value}</p>
                </div>`
            }
        }
    }
    return 0;
}

const processSimpleJson = (jsonObject,htmlDocument) => {
    for(index in jsonObject) {
        if(jsonObject[index]){
            htmlDocument.innerHTML = htmlDocument.innerHTML + `<div class='myflex'><p style='margin-bottom: 0; width: 50%'>${index}</p><p style='margin-bottom: 0; width: 50%'>${jsonObject[index]}</p></div>`
        }
    }
}

const isDataPresent = (option) => {
    for(element in option){
        if(option[element].Name === "NoReportData" && option[element].Value === "false"){
            return true
        }
        else if (option[element].Name === "NoReportData" && option[element].Value === "true"){
            return false
        }
    } 
}