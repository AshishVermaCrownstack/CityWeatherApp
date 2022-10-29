import {View, Text, Image} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../styles/GlobalStyle';
import {WeatherItemProps} from '../typings/typings';

const WeatherItem = ({weatherIcon, weatherName}: WeatherItemProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        style={GlobalStyle.weatherIcon}
        source={{uri: `https://openweathermap.org/img/wn/${weatherIcon}.png`}}
      />
      <Text style={GlobalStyle.selectCity}>{weatherName}</Text>
    </View>
  );
};

export default WeatherItem;
