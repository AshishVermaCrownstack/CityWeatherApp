import {View, Text} from 'react-native';
import React from 'react';

type NavbarProps = {
  title?: String;
  subTitle?: String;
  showBack?: boolean;
};

const Navbar = ({title, subTitle, showBack}: NavbarProps) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {showBack && <View></View>}
        {title && <Text>{title}</Text>}
      </View>
      {subTitle && <Text>{subTitle}</Text>}
    </View>
  );
};

export default Navbar;
