import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Route, TextConstants} from '../utils/Constants';
import {GlobalStyle} from '../styles/GlobalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import WeatherItem from '../components/WeatherItem';
import CalenderWidget from '../components/CalenderWidget';

const Weather = ({navigation}: any) => {
  return (
    <LinearGradient colors={['#4CE0DB', '#07E8C4']}>
      <View style={GlobalStyle.weatherContainer}>
        <View style={[GlobalStyle.row, {justifyContent: 'space-between'}]}>
          <View>
            <Text style={GlobalStyle.currentWeather}>
              {TextConstants.currentWeather}
            </Text>
            <TouchableOpacity
              style={[GlobalStyle.row]}
              onPress={() => navigation.navigate(Route.CitySelection)}>
              <Text style={GlobalStyle.selectCity}>{'Denver'}</Text>
              <FontAwesomeIcon
                style={{marginLeft: 8}}
                icon={'chevron-down'}
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>
          <View style={GlobalStyle.row}>
            <Text style={{fontSize: 36, fontWeight: 'bold', color: '#ffffff'}}>
              16
            </Text>
            <Text style={{fontSize: 36, color: '#ffffff'}}>°</Text>
            <WeatherItem weatherIcon="01d" weatherName="Sunny" />
          </View>
          <CalenderWidget />
        </View>

        <View style={GlobalStyle.row}>
          <WeatherItem weatherIcon="10d" weatherName="Rainy" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Weather;
