import {
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import {Route, TextConstants} from '../utils/constants/Constants';
import {GlobalStyle} from '../styles/GlobalStyle';
import CityListItem from '../components/CityListItem';
import ItemSeparator from '../components/ItemSeparator';
import {GlobalContext} from '../context/Provider';
import {
  clearCityList,
  getCityList,
  searchCity,
} from '../context/actions/cityActions';
import {CityRecordProps} from '../typings/typings';

const CitySelection = ({navigation}: any) => {
  const {
    cityDispatch,
    cityState: {loading, cityList, totalPage, nextPage, currentPage},
  } = useContext(GlobalContext);

  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    getCityList(cityDispatch);
    return () => clearCityList(cityDispatch);
  }, [cityDispatch]);

  const loadMoreData = () => {
    if (!loading && currentPage < totalPage && nextPage !== null) {
      getCityList(cityDispatch, nextPage, searchText);
    }
  };

  const getSearchText = (cityName: string) => {
    setSearchText(cityName);
    searchCity(cityDispatch, cityName);
  };

  const debounce = (fn: any, wait?: number) => {
    let timeout: number;
    return function () {
      var ctx = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(ctx, args);
      }, wait || 500);
    };
  };

  const debouncedSearch = debounce(getSearchText);

  const renderItem = ({item}: {item: CityRecordProps}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Route.Weather, {
            lat: item.coord.lat,
            lon: item.coord.lon,
            cityName: item.name,
          })
        }>
        <CityListItem item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={GlobalStyle.container}>
      <Navbar title={TextConstants.changeCity} showBack />
      <View style={{marginTop: 20, paddingHorizontal: 16, flex: 1}}>
        <TextInput
          onChangeText={debouncedSearch}
          style={GlobalStyle.searchInput}
          placeholder={TextConstants.searchCity}
        />
        {loading && cityList.length === 0 && currentPage === 1 ? (
          <View style={GlobalStyle.loaderStyle}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={cityList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            showsVerticalScrollIndicator={false}
            style={GlobalStyle.container}
            onEndReachedThreshold={0.2}
            onEndReached={loadMoreData}
            ListFooterComponent={() => (
              <View>
                {currentPage === totalPage && nextPage === null ? null : (
                  <ActivityIndicator size="small" style={{margin: 8}} />
                )}
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default CitySelection;
