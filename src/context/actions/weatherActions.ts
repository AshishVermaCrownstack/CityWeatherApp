import axios from 'axios';
import {WEATHER_ACTIONS} from '../../utils/constants/actionType';
import {weatherAppId} from '../../utils/constants/Constants';

export const getWeatherList = async (
  dispatch: any,
  lat: number,
  lon: number,
) => {
  dispatch({type: WEATHER_ACTIONS.GET_WEATHER_LIST.LOADING});
  await axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherAppId}&exclude=current,minutely,hourly,alerts`,
    )
    .then(res => {
      const data = res.data;
      dispatch({type: WEATHER_ACTIONS.GET_WEATHER_LIST.SUCCESS, payload: data});
    })
    .catch(err => {
      dispatch({type: WEATHER_ACTIONS.GET_WEATHER_LIST.FAILURE});
      console.log(err);
    });
};
