import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {GlobalStyle} from '../styles/GlobalStyle';
import {NavbarProps} from '../typings/typings';

const Navbar = ({title, subTitle, showBack}: NavbarProps) => {
  return (
    <View style={GlobalStyle.navContainer}>
      <View style={GlobalStyle.row}>
        {showBack && (
          <View style={{marginRight: 4}}>
            <FontAwesomeIcon size={30} icon={'angle-left'} />
          </View>
        )}
        {title && <Text style={GlobalStyle.heading}>{title}</Text>}
      </View>
      {subTitle && <Text style={GlobalStyle.normalText}>{subTitle}</Text>}
    </View>
  );
};

export default Navbar;
