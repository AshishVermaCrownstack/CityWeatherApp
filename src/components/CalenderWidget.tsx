import {View, Text} from 'react-native';
import React from 'react';
import {format} from 'date-fns';
import {GlobalStyle} from '../styles/GlobalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CalenderWidget = () => {
  const date = new Date();
  return (
    <View style={GlobalStyle.calanderContainer}>
      <View
        style={[
          GlobalStyle.row,
          {marginVertical: 4, justifyContent: 'space-between'},
        ]}>
        <Text
          style={{
            color: '#30C1FA',
            fontWeight: 'bold',
            fontSize: 18,
            marginRight: 8,
          }}>
          {date.getDate()}
        </Text>
        <View
          style={{backgroundColor: '#A2E3FE', padding: 4, borderRadius: 20}}>
          <FontAwesomeIcon
            size={13}
            icon={['far', 'calendar']}
            style={{color: '#30C1FA'}}
          />
        </View>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 10}}>
        {format(date, 'eee,yyyy')}
      </Text>
    </View>
  );
};

export default CalenderWidget;
