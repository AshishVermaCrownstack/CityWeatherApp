import {StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({
  container: {backgroundColor: '#F7FFFF', flex: 1},
  navContainer: {
    paddingHorizontal: 16,
  },
  weatherContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  calanderContainer: {
    backgroundColor: '#ffffff',
    paddingBottom: 8,
    paddingTop: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  normalText: {fontSize: 16},
  textSM: {fontSize: 12},
  itemSeparatorStyle: {height: 1, backgroundColor: '#E0E5E9'},
  currentWeather: {fontSize: 18, color: '#ffffff', fontWeight: 'bold'},
  selectCity: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  weatherIcon: {
    width: 44,
    height: 44,
    marginBottom: -6,
  },
});
