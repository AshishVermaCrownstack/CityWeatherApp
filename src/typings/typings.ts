export type NavbarProps = {
  title?: string;
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
  weatherIcon: string;
  weatherName: string;
};

export type CityInitialStateProps = {
  loading: boolean;
  cityList: Array<CityRecordProps>;
  totalPage: number;
  nextPage: number | null;
  currentPage: number;
};

export type WeatherRecordProps = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: number;
  pop: number;
  uvi: number;
};

export type WeatherInitialStateProps = {
  loading: boolean;
  weatherList: Array<WeatherRecordProps>;
};
