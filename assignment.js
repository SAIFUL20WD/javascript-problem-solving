// https://github.com/SAIFUL20WD/javascript-problem-solving

// Kilometer to Meter Convert Function

function kilometerToMeter(kilometer){
    if(kilometer > 0){
        var meter = kilometer * 1000;
        return meter;
    }
    else{
        return "Please Enter a Positive Number. Distance can't be negative.";
    }
}


// Budget Calculator Function 

function budgetCalculator(watch, phone, laptop){
    if(watch > 0 && phone > 0 && laptop > 0){
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
    else{
        return "Please Enter Three Positive Number, Separated by Comma";
    }
}


// Hotel Cost Function 

function hotelCost(day){
    var cost = 0;
    if(day <= 10 && day > 0){
        cost = day * 100;
    }
    else if(day <= 20 && day > 0){
        var firstTen = 10 * 100;
        var remaining = day - 10;
        var secondTen = remaining * 80;
        var cost = firstTen + secondTen;
    }
    else if(day >= 21 && day > 0){
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remaining = day - 20;
        var last = remaining * 50;
        var cost = firstTen + secondTen + last;
    }
    else if(day <= 0 && day != ""){
        return "Please Enter a Positive Number. Minimum Value Should Be 1 or Above";
    }
    else{
        return "Please Enter a Positive Number. Avoid String and Value 0";
    }
    return cost;
}


// Mega Friend Name Finder Function

function megaFriend(friends){
    var bigName = [0];
    if(friends == "" || friends == null || friends.length == 0 || typeof friends === 'number'){
        return "Please Give Your Friends Name in an Array and Array can't be empty. Avoid String and Number."
    }
    else{
        for(var i = 0; i < friends.length; i++){
            var friendName = friends[i];
            if(bigName.length < friendName.length){
                bigName = friendName;
            }
        }
    }
    return bigName;
}

// End