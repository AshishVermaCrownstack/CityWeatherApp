import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {GlobalStyle} from '../styles/GlobalStyle';
import {NavbarProps} from '../typings/typings';
import {useNavigation} from '@react-navigation/native';

const Navbar = ({title, showBack}: NavbarProps) => {
  const {goBack} = useNavigation();
  return (
    <View style={GlobalStyle.navContainer}>
      <View style={[GlobalStyle.row]}>
        {showBack && (
          <TouchableOpacity style={{marginRight: 4}} onPress={goBack}>
            <FontAwesomeIcon size={30} icon={'angle-left'} />
          </TouchableOpacity>
        )}
        {title && <Text style={GlobalStyle.heading}>{title}</Text>}
      </View>
    </View>
  );
};

export default Navbar;
