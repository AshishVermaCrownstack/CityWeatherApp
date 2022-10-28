import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import {TextConstants} from '../utils/Constants';
import {GlobalStyle} from '../styles/GlobalStyle';
import CityListItem from '../components/CityListItem';
import ItemSeparator from '../components/ItemSeparator';
import {CityRecordProps} from '../typings/typings';

const CitySelection = () => {
  const array: Array<CityRecordProps> = [
    {
      _id: '625404ece80ce7b3d594e42f',
      id: 2509176,
      name: 'Abdelmoumen',
      state: '',
      country: 'DZ',
      coord: {
        lon: 1.43957,
        lat: 35.289631,
      },
    },
    {
      _id: '625404efe80ce7b3d5951478',
      id: 2743440,
      name: 'Aboadela',
      state: '',
      country: 'PT',
      coord: {
        lon: -7.98869,
        lat: 41.275589,
      },
    },
    {
      _id: '6254050ee80ce7b3d59729a9',
      id: 8012630,
      name: 'Aboadela',
      state: '',
      country: 'PT',
      coord: {
        lon: -7.95596,
        lat: 41.28223,
      },
    },
    {
      _id: '625404fbe80ce7b3d595d2e8',
      id: 3131004,
      name: 'Acebes del Páramo',
      state: '',
      country: 'ES',
      coord: {
        lon: -5.84395,
        lat: 42.442841,
      },
    },
    {
      _id: '625404ede80ce7b3d594f190',
      id: 2525778,
      name: 'Acquarica del Capo',
      state: '',
      country: 'IT',
      coord: {
        lon: 18.24543,
        lat: 39.911121,
      },
    },
    {
      _id: '625404fce80ce7b3d595ebd3',
      id: 3183494,
      name: 'Acquaviva delle Fonti',
      state: '',
      country: 'IT',
      coord: {
        lon: 16.842489,
        lat: 40.897831,
      },
    },
    {
      _id: '62540509e80ce7b3d596ca79',
      id: 6538937,
      name: 'Acquaviva delle Fonti',
      state: '',
      country: 'IT',
      coord: {
        lon: 16.842489,
        lat: 40.897831,
      },
    },
    {
      _id: '62540500e80ce7b3d5962d5b',
      id: 4019757,
      name: 'Acuítzio del Canje',
      state: '',
      country: 'MX',
      coord: {
        lon: -101.333328,
        lat: 19.48333,
      },
    },
    {
      _id: '62540500e80ce7b3d5963424',
      id: 4179193,
      name: 'Adel',
      state: 'GA',
      country: 'US',
      coord: {
        lon: -83.423492,
        lat: 31.13714,
      },
    },
    {
      _id: '62540502e80ce7b3d59650b8',
      id: 4846398,
      name: 'Adel',
      state: 'IA',
      country: 'US',
      coord: {
        lon: -94.017448,
        lat: 41.614429,
      },
    },
    {
      _id: '625404e8e80ce7b3d5949c54',
      id: 1732246,
      name: 'Adela',
      state: '',
      country: 'PH',
      coord: {
        lon: 120.972908,
        lat: 12.44164,
      },
    },
    {
      _id: '625404e3e80ce7b3d59462ec',
      id: 1023656,
      name: 'Adelaide',
      state: '',
      country: 'ZA',
      coord: {
        lon: 26.295641,
        lat: -32.70747,
      },
    },
  ];

  return (
    <View style={GlobalStyle.container}>
      <Navbar title={TextConstants.changeCity} showBack />
      <View style={{marginTop: 12, paddingHorizontal: 16, flex: 1}}>
        <TextInput
          style={GlobalStyle.searchInput}
          placeholder={TextConstants.searchCity}
        />
        <FlatList
          data={array}
          renderItem={CityListItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          style={GlobalStyle.container}
        />
      </View>
    </View>
  );
};

export default CitySelection;

const styles = StyleSheet.create({});
