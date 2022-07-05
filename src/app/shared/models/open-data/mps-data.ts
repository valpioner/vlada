// page: https://data.rada.gov.ua/open/data/mps-data_skl9
// json: https://data.rada.gov.ua/ogd/mps/skl9/mps-data.json
// struct: https://data.rada.gov.ua/ogd/mps/stru/mps-stru.json

export interface MpsData {
  mps: Mp[];
  regions: Region[];
  decl_row_names: DeclRowName[];
  fr_posts: FrPost[];
  fr_associations: FrAssociation[];
  mp_posts: MpPost[];
  assistant_types: AssistantType[];
  parties: Party[];
}

export interface Mp {
  id: number;
  rada_id?: number;
  gender?: number; // 1 - male, 2 - female
  surname?: string;
  firstname?: string;
  patronymic?: string;
  district_num?: string | number;
  region_id?: number;
  num_in_party?: string | number;
  date_oath?: string;
  resignation_date?: string | Date;
  resignation_reason?: string;
  birthday?: string | Date;
  short_info?: string;
  photo?: string;
  photo_ext?: string;
  party_id?: number;
  convocation?: number;
  presentAuto_present?: number;
  presentAuto_absent?: number;
  presentManualy_present?: number;
  presentManualy_absent?: number;
  presentManualy_confirmAbsent?: number;
  emails?: MpEmail[];
  phones?: MpPhone[];
  assistants?: MpAssistant[];
  post_bfdas?: PostBfda[];
  post_frs?: PostFr[];
  post_mps?: PostMp[];
  socials?: MpSocial[];
  declarations?: MpDeclaration[];
}

export interface MpEmail {
  value?: string;
}

export interface MpPhone {
  value?: string;
}

export interface MpAssistant {
  fullname?: string;
  type_id?: number;
}

export interface PostBfda {
  post_name?: string;
  association_name?: string;
}

export interface PostFr {
  fr_post_id?: number;
  fr_association_id?: number;
}

export interface PostMp {
  organization_id?: number;
  post_id?: number;
}

export interface MpSocial {
  url?: string;
}

export interface Region {
  id: number;
  name?: string;
}

export interface DeclRowName {
  id: number;
  row_name?: string;
  row_num?: number;
}

export interface FrPost {
  id: number;
  name?: string;
}

export interface FrAssociation {
  id: number;
  name?: string;
  is_fr?: number;
  type?: number;
}

export interface MpDeclaration {
  post?: string;
  year?: number;
  declarate_date?: string;
  fullname?: string;
  family_members?: DeclarationFamilyMember[];
  deposits: DeclarationDeposit[];
  financial_liabilities: DeclarationFinancialLiability[];
  incomes: DeclarationIncome[];
  incomes_abroad: DeclarationIncomeAbroad[];
  realties: DeclarationRealty[];
  transports: DeclarationTransport[];
}

export interface DeclarationFamilyMember {
  decl_row_name_id?: number;
  relationship?: string;
  fullname?: string;
}

export interface DeclarationDeposit {
  decl_row_name_id?: number;
  sum_all?: string;
  sum_abroad?: string;
}

export interface DeclarationFinancialLiability {
  decl_row_name_id?: number;
  sum_all?: string;
  sum_abroad?: string;
}

export interface DeclarationIncome {
  decl_row_name_id?: number;
  sum_declarant?: string;
  sum_family?: string;
  organizations?: string;
}

export interface DeclarationIncomeAbroad {
  decl_row_name_id?: number;
  country?: string;
  sum_abroad?: string;
  sum_all?: string;
}

export interface DeclarationRealty {
  decl_row_name_id?: number;
  sum_own?: string;
  sum_other?: string;
  area?: string;
}

export interface DeclarationTransport {
  decl_row_name_id?: number;
  model?: string;
  year_create?: string | number;
  sum_own?: string;
  sum_other?: string;
}

export interface MpPost {
  organization_id: number;
  post_id: number;
  post_name?: string;
}

export interface AssistantType {
  id: number;
  name?: string;
}

export interface Party {
  id: number;
  name?: string;
}
