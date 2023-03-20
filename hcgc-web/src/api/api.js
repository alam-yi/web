import http from './index'

const getWeather = data => {
  return http.get({
    url: '/WeatherForecast',
    data,
  })
}

export default {
  getWeather,
}