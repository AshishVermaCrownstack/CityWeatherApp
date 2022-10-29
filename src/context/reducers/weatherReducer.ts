import {WEATHER_ACTIONS} from '../../utils/constants/actionType';

const weatherReducer = (
  state: any,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case WEATHER_ACTIONS.GET_WEATHER_LIST.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case WEATHER_ACTIONS.GET_WEATHER_LIST.SUCCESS: {
      return {
        ...state,
        loading: false,
        weatherList: payload?.daily,
      };
    }
    case WEATHER_ACTIONS.GET_WEATHER_LIST.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
  }
};

export default weatherReducer;
