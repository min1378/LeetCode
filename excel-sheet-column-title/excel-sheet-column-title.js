/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const excelMap = {};
    for(let i = "A".charCodeAt(0); i < "Z".charCodeAt(0); i++){
        const index = i - 64 
        excelMap[index] = String.fromCharCode(i);
    }
    excelMap[0] = 'Z';
    let result = '';
    const calExcelTitle = (columnNumber) => {
        if(columnNumber <= 0) return;
        const rest = columnNumber % 26;
        const nextNumber = Math.floor(columnNumber / 26);
        result = excelMap[rest] + result;
        
        if(rest === 0) calExcelTitle(nextNumber - 1);
        else calExcelTitle(nextNumber);
    }
    calExcelTitle(columnNumber);
    return result;
};