export type NavbarProps = {
  title?: String;
  subTitle?: String;
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
