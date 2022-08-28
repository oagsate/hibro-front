import { SelectOpt } from "../models/index.model";

export enum Gender{
  unknown,
  male,
  female
}

export const genderOpts:SelectOpt[] =[
  {
    label:'未知',
    value:Gender.unknown
  },
  {
    label:'男',
    value:Gender.male
  },
  {
    label:'女',
    value:Gender.female
  }
];

export enum Estatus{
  unknown,
  single,
  inRelation,
  Married,
}


export const estatusOpts:SelectOpt[]=[
  {
    label:'未知',
    value:Estatus.unknown
  },
  {
    label:'单身',
    value:Estatus.single
  },
  {
    label:'恋爱中',
    value:Estatus.inRelation
  },
  {
    label:'已婚',
    value:Estatus.Married
  },
];

export enum Education{
  unknown,
  primary,
  middleSchool,
  highSchool,
  juniorCollege,
  bachelor,
  master,
  doctor,
  others
}

export const educationOpts = [
  {
    label:'未知',
    value:Education.unknown
  },
  {
    label:'小学',
    value:Education.primary
  },
  {
    label:'初中',
    value:Education.middleSchool
  },
  {
    label:'高中',
    value:Education.highSchool
  },
  {
    label:'大专',
    value:Education.juniorCollege
  },
  {
    label:'本科',
    value:Education.bachelor
  },
  {
    label:'硕士',
    value:Education.master
  },
  {
    label:'博士',
    value:Education.doctor
  },
  {
    label:'其他',
    value:Education.others
  },
];
