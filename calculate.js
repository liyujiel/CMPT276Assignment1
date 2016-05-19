function percentage(){   
    var getgrade = document.getElementsByClassName("getgrade");
    var totalgrade = document.getElementsByClassName("totalgrade");
    var i=0;
    for ( i ; i < getgrade.length ; i++) {
        var currentgrade = getgrade[i].value;
        var currenttotal = totalgrade[i].value;
        var percent = (currentgrade/currenttotal)*100;
        if (!isNaN(percent)) {
            document.getElementsByClassName("percent")[i].innerHTML = percent+ '%';
        }
        else{
            percent = "Need More Info";
            document.getElementsByClassName("percent")[i].innerHTML = percent;
        }
    }
}



function calculteavg(){
    percentage();
    var getgrade = document.getElementsByClassName("getgrade");
    var totalgrade = document.getElementsByClassName("totalgrade");
    var totalGgrade = 0;
    var totalTgrade = 0;
    var i = 0;
    for (i; i < getgrade.length; i++) {
        //alert(getgrade[i].value);
        if(getgrade[i].value == null|| totalgrade[i].value == "") {
            getgrade[i].value = 0;
        }
        if (totalgrade[i].value == null|| totalgrade[i].value == "") {
            totalgrade[i].value = 0;
        }
        totalGgrade += parseInt(getgrade[i].value);
        totalTgrade += parseInt(totalgrade[i].value);
    }
    var avg = totalGgrade/totalTgrade *100 +"%";
    //alert(avg);
    document.getElementById("result").innerHTML = avg;
}

function calcultemean(){
    // var mean = (percent1 + percent2 +percent3+percent4)/4 *100 + "%";
    percentage();
    var totalpercent = 0;
    var times=0;
    var getgrade = document.getElementsByClassName("getgrade");
    var totalgrade = document.getElementsByClassName("totalgrade");
    var i=0;
    for ( i ; i < getgrade.length ; i++) {
        var currentgrade = getgrade[i].value;
        var currenttotal = totalgrade[i].value;
        var percent = (currentgrade/currenttotal)*100;
        if (!isNaN(percent)) {
            totalpercent += percent;
            times += 1;
        }
    }
    var mean =  totalpercent/times + '%';
    document.getElementById("result").innerHTML = mean;
}