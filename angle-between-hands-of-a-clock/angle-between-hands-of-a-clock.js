/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const angle = hour * 30 - (5.5 * minutes);
    const absAngle = Math.abs(angle);
    if(absAngle >= 180) return 360 - absAngle;
    return absAngle;
};