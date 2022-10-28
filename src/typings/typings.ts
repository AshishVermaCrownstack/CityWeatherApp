export type NavbarProps = {
  title?: String;
  showBack?: boolean;
};

export type CityRecordProps = {
  _id: string;
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

export type WeatherItemProps = {
  weatherIcon: String;
  weatherName: String;
};
