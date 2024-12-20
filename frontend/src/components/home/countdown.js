function Countdown(date, trailText){
    //set date we are counting down to
    var countDownDate = new Date(date);

    //Get Current Date and Time
    var now = new Date().getTime();

    //Get distance to date
    var distance = countDownDate-now;

    //Time calculation for days minutes and seconds
    var days = Math.floor(distance/(1000*60*60*24));
    var hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds Left Until ${trailText}`
}

export default Countdown; 