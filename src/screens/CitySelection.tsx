import {View} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import {TextConstants} from '../../utils/Constants';

const CitySelection = () => {
  return (
    <View>
      <Navbar title={TextConstants.changeCity} showBack />
    </View>
  );
};

export default CitySelection;
