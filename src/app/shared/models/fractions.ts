// https://data.rada.gov.ua/ogd/zal/ppz/skl9/plenary_deputies-skl9.json

export interface Fraction {
  id_fraction: number;
  type: number; // 0 - фракція, 1 - позафракційні та групи
  name: string;
}
