/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    
    let countTriangles = 0;
    for (let n = 0; n <= preferences.length-1; n++) {
        let k1 = preferences[n];
        let k2 = preferences[k1 - 1];
        let k3 = preferences[k2 - 1];
        
        if(k3 === n + 1){
            countTriangles = countTriangles + 1;
        }
    }
    
    if (countTriangles > 0) {
        countTriangles = parseInt(countTriangles / 3);
    }
    
    return countTriangles;
    
};
