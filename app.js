function smartWatch() {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let tarikh = date.getDate();
    let week = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formet = 'AM';


    //Calender
    if (month == 0) {
        month = 'Jan';
    } else if (month == 1) {
        month = 'Feb';
    } else if (month == 2) {
        month = 'Mar';
    } else if (month == 3) {
        month = 'Apr';
    } else if (month == 4) {
        month = 'May';
    } else if (month == 5) {
        month = 'Jun';
    } else if (month == 6) {
        month = 'Jul';
    } else if (month == 7) {
        month = 'Aug';
    } else if (month == 8) {
        month = 'Sep';
    } else if (month == 9) {
        month = 'Oct';
    } else if (month == 10) {
        month = 'Nov';
    } else if (month == 11) {
        month = 'Dec';
    }

    // Week
    if (week == 0) {
        week = 'Sunday';
    } else if (week == 1) {
        week = 'Monday';
    } else if (week == 2) {
        week = 'Tuesday';
    } else if (week == 3) {
        week = 'Wednesday';
    } else if (week == 4) {
        week = 'Thursday';
    } else if (week == 5) {
        week = 'Friday';
    } else if (week == 6) {
        week = 'Saturday';
    }


    // AM PM Format

    if(hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
        formet = 'PM'
    }


    // Watch
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;



    let calender = `${year} - ${month} - ${tarikh}`
    let watchTime = `${hours} : ${minutes} : ${seconds}`;

    document.getElementById('todayDate').innerText = calender;
    document.getElementById('today').innerText = week;
    document.getElementById('somoy').innerText = watchTime;
    document.querySelector('p').innerText = formet;





    // console.log(calender)

    setInterval(smartWatch, 1000);

}

smartWatch()
