//---------Total Bricks Calculator: ----------------

function brickCalculator(buildingNum) {
    if (buildingNum == 0) {
        return 0;
    } else if (buildingNum < 0) {
        return "Building Number cannot be less than Zero";
    } else if (buildingNum <= 10 && buildingNum >= 1) {
        let brickNum = buildingNum * 15000;
        return brickNum;
    } else if (buildingNum > 10 && buildingNum <= 20) {
        let brickNum = ((buildingNum - 10) * 12000) + 150000;
        return brickNum;
    } else if (buildingNum > 20) {
        let brickNum = ((buildingNum - 20) * 10000) + 270000;
        return brickNum;
    }
}

var totalBrickNum = brickCalculator(45)
console.log("Total Bricks: ", totalBrickNum)
    //-----------End of brickCalculator-----------