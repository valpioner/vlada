export interface Person {
  radaId?: number; // rada id in parliament
  mpId?: number; // person id in parliament
  frId?: number; // fraction id
  frType?: number; // 0 - фракція, 1 - група або позафракційні
  frTitle?: string;
  frTitleShort?: string;
  firstName: string; // ім'я
  lastName: string; // фамілія
  patronymic?: string; // по-батькові
  fullName?: string;
  sex: number; // 1 - male, 2 - female
  mpData?: any;
}
