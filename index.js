// Code your solution in this file!

function distanceFromHqInBlocks(distance ){
    if(distance > 42) { 
        return distance - 42 
    }else {
        return 42 - distance;
    }
}
function distanceFromHqInFeet(distanceInFeet){
   
    return distanceFromHqInBlocks(distanceInFeet)* 264;
}
function distanceTravelledInFeet(x , y) { //start of the travel
    let totalDistancexy;
    if (y > x){
        totalDistancexy = y - x
    }else{
        totalDistancexy = x - y
    }
    return totalDistancexy * 264;
}
function calculatesFarePrice(start, destination){
    let totalDistancexy = distanceTravelledInFeet(start, destination)
    let price;
    if (totalDistancexy <= 400){
        return price = 0;
    } else if (totalDistancexy > 400  && (totalDistancexy <= 2000)){
        return price = 2.56;
    }else if(totalDistancexy > 2000 && (totalDistancexy <= 2500)){
        return price = 25;
    }else{
        return price = `cannot travel that far`;
    }
}