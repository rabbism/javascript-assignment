//-------feetToMile--------//
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var nanarMile = feetToMile(150);
nanarMile=nanarMile.toFixed(2);
console.log(nanarMile);
//-----------End of feetToMile-----------//

//-------woodCalculator----------//
function woodCalculator(chair,tabile,bed){
    var chairCount = chair *3;
    var tabileCount = tabile *4;
    var bedCount = bed *5;
    var totalWood =chairCount + tabileCount + bedCount;
    return totalWood;
}
var nanurWood = woodCalculator(5,4,6);
console.log(nanurWood);
//-----------End of woodCalculator-----------//


//---------- Bricks Calculator: ----------------//

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
//-----------End of brickCalculator-----------//

//--------- tinyFriend-------------------//

function tinyFriend(friendName) {
    let minLength = friendName[0].length;
    let tinyValue = "";

    if (friendName.length <= 0) {
        return "Name storage cannot be empty";

    } else {
        for (let i = 0; i < friendName.length; i++) {
            if (friendName[i].length < minLength) {
                tinyValue = friendName[i];
                minLength = friendName[i].length;
            }
        }
    }
    return tinyValue;
}

var allFriendName = ["Jamal", "Kamal", "Allen", "Mili", "Kobir", "Zoyo", "Antu", "Jamal"];
var tinyFriendName = tinyFriend(allFriendName);
console.log("My Tiny Friend's Name is: ", tinyFriendName);
//-----------End of tinyFriend-----------//


