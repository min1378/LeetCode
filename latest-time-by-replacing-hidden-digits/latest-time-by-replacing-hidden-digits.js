/**
 * @param {string} time
 * @return {string}
 */
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
var maximumTime = function(time) {
    let[hour, min] = time.split(":");
    if(hour[0] === '?') {
        console.log(hour)
        if(Number(hour[1]) < 4 || hour[1] === '?') hour = hour.replaceAt(0, "2");
        else if(Number(hour[1]) > 3) hour = hour.replaceAt(0, "1");
    }
    if(hour[1] === '?'){
        if(hour[0] === '0' || hour[0] === '1') hour = hour.replaceAt(1, "9");
        if(hour[0] === '2') hour = hour.replaceAt(1, "3");
    }
    if(min[0] === '?') min = min.replaceAt(0, "5");
    if(min[1] === '?') min = min.replaceAt(1, "9");
    return hour + ':' + min;
};