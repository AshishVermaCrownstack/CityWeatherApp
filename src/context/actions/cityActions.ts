import axios from 'axios';
import {CITY_ACTIONS} from '../../utils/constants/actionType';

export const getCityList = async (
  dispatch: any,
  pageNumber?: number,
  city?: string,
) => {
  dispatch({type: CITY_ACTIONS.GET_CITY_LIST.LOADING});

  await axios
    .get(
      `http://52.73.146.184:3000/api/app/user/get-city-list?page=${
        pageNumber ? pageNumber : 1
      }&search=${city ? city : ''}`,
    )
    .then(res => {
      const data = res.data;
      if (data.status === 200) {
        dispatch({
          type: CITY_ACTIONS.GET_CITY_LIST.SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: CITY_ACTIONS.GET_CITY_LIST.FAILURE,
        });
        console.log(data.message);
      }
    })
    .catch(err => {
      dispatch({
        type: CITY_ACTIONS.GET_CITY_LIST.FAILURE,
      });
      console.log(err);
    });
};

export const searchCity = async (dispatch: any, city?: string) => {
  clearCityList(dispatch);
  dispatch({type: CITY_ACTIONS.SEARCH_CITY.LOADING});
  await axios
    .get(
      `http://52.73.146.184:3000/api/app/user/get-city-list?page=1&search=${
        city ? city : ''
      }`,
    )
    .then(res => {
      const data = res.data;
      if (data.status === 200) {
        dispatch({
          type: CITY_ACTIONS.SEARCH_CITY.SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: CITY_ACTIONS.SEARCH_CITY.FAILURE,
        });
        console.log(data.message);
      }
    })
    .catch(err => {
      dispatch({
        type: CITY_ACTIONS.SEARCH_CITY.FAILURE,
      });
      console.log(err);
    });
};

export const clearCityList = (dispatch: any) => {
  dispatch({type: CITY_ACTIONS.CLEAR_CITY_LIST.SUCCESS});
};
