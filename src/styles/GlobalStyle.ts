import {StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({
  container: {backgroundColor: '#F7FFFF', flex: 1},
  navContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  searchInput: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderColor: '#56CCFF',
    fontWeight: '600',
    color: '#292929',
    marginVertical: 8,
  },
  heading: {fontSize: 24, fontWeight: 'bold', marginBottom: 8},
  normalText: {fontSize: 16},
  textSM: {fontSize: 12},
  itemSeparatorStyle: {height: 1, backgroundColor: '#E0E5E9'},
});
