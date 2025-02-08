let form = document.querySelector('form'),
input = document.querySelector('#search'),
weather = document.querySelector('.weather')
const API_KEY = `10d7c5b7541d1896c89204da1ce16d37`



const  getWeather = async(city)=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await  fetch(api);
    const data =  await response.json()  
 console.log(data);

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(res=> res.json()).then(data=>{

//   })
 

   return showWeather(data)
}


let showWeather = (data)=>{
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
           
             <h1> ${data.name}</h1>
             <p> ${data.sys.country}</p>
            <h2>${data.main.temp}℃</h2>
             <div id="icon">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
       
            <div class="box">
        <h2>wind   ${data.wind.speed}km/h</h2>
        <h2>humidity  ${data.main.humidity}%</h2>
         <span>weather  ${data.weather[0].main} </span>
        
    </div>
            </div>
           
            
    `
}


// console.log(data);
form.addEventListener('submit',(e)=>{
    getWeather(input.value) 
    e.preventDefault()
    

})











// fetch("https://Weather-API.proxy-production.allthingsdev.co/weather/citySearch?search_term=London", requestOptions)
// .then((response) => response.text())
// .then((result) => console.log(result))
// .catch((error) => console.error(error))
