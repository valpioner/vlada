// https://data.rada.gov.ua/ogd/zal/map/map_zal-skl9.json

export interface ZalSeat {
  row: number;
  col: number;
  pos_x: number;
  pos_y: number;
  title: string;
  id_mp?: number;
  id_fr?: number;
}

export interface ZalSeatWithGap extends ZalSeat {
  gap?: number;
}
