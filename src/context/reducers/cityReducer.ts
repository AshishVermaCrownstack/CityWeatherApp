import {CITY_ACTIONS} from '../../utils/constants/actionType';

const cityReducer = (
  state: any,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case CITY_ACTIONS.GET_CITY_LIST.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CITY_ACTIONS.GET_CITY_LIST.SUCCESS: {
      return {
        ...state,
        loading: false,
        cityList: [...state.cityList, ...payload?.Record],
        totalPage: payload?.totalPages,
        nextPage: payload?.pageToken,
        currentPage: payload?.currentPage,
      };
    }
    case CITY_ACTIONS.GET_CITY_LIST.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case CITY_ACTIONS.SEARCH_CITY.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CITY_ACTIONS.SEARCH_CITY.SUCCESS: {
      return {
        ...state,
        loading: false,
        cityList: payload?.Record,
        totalPage: payload?.totalPages,
        nextPage: payload?.pageToken,
        currentPage: payload?.currentPage,
      };
    }
    case CITY_ACTIONS.SEARCH_CITY.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case CITY_ACTIONS.CLEAR_CITY_LIST.SUCCESS: {
      return {
        ...state,
        loading: false,
        cityList: [],
        totalPage: 1,
        nextPage: null,
        currentPage: 1,
      };
    }
  }
};

export default cityReducer;
