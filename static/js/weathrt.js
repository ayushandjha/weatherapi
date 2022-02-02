

const cityInput = document.querySelector(".cityInput");
const searchBtn = document.querySelector(".searchBtn");
const disDate = document.querySelector(".date");
const disTime = document.querySelector(".time");
const disCity = document.querySelector(".city");
const disTemp = document.querySelector(".temp");
const disSky = document.querySelector(".sky");


setInterval(()=>{
    let date = new Date();
    let dateNo = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();

    let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Nov', 'Dec'];
    let dayList = ['Sun','Mon', 'Tue', 'Wed', 'Thu','Fri','Sat',];
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour > 12) {
        var AM_PM = "PM";
    } else {
        var AM_PM = "AM";
    }

    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }


    disDate.textContent = `${dayList[day]}, ${dateNo} ${monthList[month]}` ;
    disTime.textContent = `${hour}:${minute} ${AM_PM}`


},1000)

const weatherUpdate = async ()=>{
    if (!cityInput.value) {
        disCity.innerHTML = "Input blank. Enter the name of city";
    } 
    else {
        try {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value.toLowerCase()}%20&appid=e2fd92809e13d96a688882628d10f7ac`;
            const apiRes = await fetch(api);
            const apiResJson = await apiRes.json();
            const temp = Math.floor(apiResJson.main.temp - 273);
            const country = apiResJson.sys.country;
            const city = apiResJson.name;
            const weather = apiResJson.weather[0].main;

            disCity.innerHTML = `${city}, ${country}`;
            disTemp.innerHTML = `${temp}<sup>o</sup> C`;
            disSky.innerHTML = ` ${weather}`;
        } catch (error) {
            console.log(error);
            disCity.innerHTML = "Enter the name of city properly"
            disTemp.innerHTML = "";
            disSky.innerHTML = "";
        }
    }

}


searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    weatherUpdate();
})































