const getWeather=async()=>{
    let result=""
    const city=winp.value
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=ccf0ce9e90bf4881b9a101104241408&q=${city}`)
    const jsres=await res.json()
    console.log(res)
    result=`
    <h3>${jsres.location.name},${jsres.location.region},${jsres.location.country}</h3>
    <img src=${jsres.current.condition.icon} alt="icon">
    <h5>${jsres.current.condition.text}</h5>`

    cnt.innerHTML=result
}