import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Route, TextConstants} from '../utils/constants/Constants';
import {GlobalStyle} from '../styles/GlobalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import WeatherItem from '../components/WeatherItem';
import CalenderWidget from '../components/CalenderWidget';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
import {getWeatherList} from '../context/actions/weatherActions';
import {WeatherRecordProps} from '../typings/typings';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

const Weather = ({navigation, route}: any) => {
  const currentTime = new Date().getHours();
  const item = route.params;

  const {
    weatherDispatch,
    weatherState: {loading, weatherList},
  } = useContext(GlobalContext);

  const [location, setLocation] = useState<GeoPosition>();
  const lat = item ? item.lat : location?.coords.latitude;
  const lon = item ? item.lon : location?.coords.longitude;

  const getLocation = async () => {
    await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    )
      .then(result => {
        if (result === RESULTS.GRANTED) {
          console.log('Location permission granted!');
          Geolocation.getCurrentPosition(
            position => {
              setLocation(position);
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission not granted!');
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherList(weatherDispatch, lat, lon);
  }, [item, weatherDispatch, location]);

  return (
    <View style={GlobalStyle.container}>
      {loading ? (
        <View style={GlobalStyle.loaderStyle}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <LinearGradient colors={['#4CE0DB', '#07E8C4']}>
          <View
            style={[
              GlobalStyle.row,
              GlobalStyle.weatherContainer,
              {justifyContent: 'space-between', marginBottom: -8},
            ]}>
            <View>
              <Text style={GlobalStyle.currentWeather}>
                {TextConstants.currentWeather}
              </Text>
              <TouchableOpacity
                style={[GlobalStyle.row]}
                onPress={() => navigation.navigate(Route.CitySelection)}>
                <Text style={GlobalStyle.selectCity}>
                  {item ? item.cityName : 'Noida'}
                </Text>
                <FontAwesomeIcon
                  style={{marginLeft: 8}}
                  icon={'chevron-down'}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>
            <View style={GlobalStyle.row}>
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}>
                {Math.floor(
                  currentTime >= 0 && currentTime < 12
                    ? weatherList[0]?.temp?.morn
                    : currentTime >= 12 && currentTime < 17
                    ? weatherList[0]?.temp?.day
                    : currentTime >= 17 && currentTime < 20
                    ? weatherList[0]?.temp?.eve
                    : weatherList[0]?.temp?.night,
                )}
              </Text>
              <Text style={{fontSize: 36, color: '#ffffff'}}>°</Text>
              {weatherList.length > 0 && (
                <WeatherItem
                  weatherIcon={weatherList[0]?.weather[0]?.icon}
                  weatherName={weatherList[0]?.weather[0]?.main}
                />
              )}
            </View>
            <CalenderWidget />
          </View>
          <View
            style={[
              GlobalStyle.row,
              {paddingHorizontal: 14, paddingBottom: 16},
            ]}>
            {weatherList
              .slice(1, 7)
              .map((i: WeatherRecordProps, index: number) => (
                <View key={index} style={{marginHorizontal: 6}}>
                  <WeatherItem
                    weatherIcon={i.weather[0].icon}
                    weatherName={i.weather[0].main}
                  />
                </View>
              ))}
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default Weather;

// AIzaSyCeaLSy7Q6gz9RHuFXLOvzynVGnRwa17Vs
