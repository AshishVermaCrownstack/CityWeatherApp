import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../styles/GlobalStyle';
import {CityRecordProps} from '../typings/typings';

const CityListItem = ({item}: {item: CityRecordProps}) => {
  return (
    <TouchableOpacity style={{marginVertical: 16}} onPress={() => {}}>
      <Text style={[GlobalStyle.normalText, {color: '#353535'}]}>
        {item.name}
      </Text>
      <Text style={[GlobalStyle.textSM, {color: '#616565'}]}>
        {item.country}
      </Text>
    </TouchableOpacity>
  );
};

export default CityListItem;
