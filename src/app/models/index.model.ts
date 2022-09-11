export interface SelectOpt {
  value: string | number;
  label: string;
  [key: string]: any;
}

export interface RO {
  code: number;
  desc: string;
  data: any;
}

export interface User {
  id: number;
  name: string;
  createTime?: any;
  lastTime?: any;
  gender: number;
  birthday: string;
  status: number;
  orientation: number;
  height?: number;
  weight?: number;
  education?: number;
  location?: string;
  description?: any;
  email?: any;
  estatus?: number;
  avatar?: string;
}

export interface Thought {
  uid: number;
  createTime: string;
  name: string;
  id: number;
  content: string;
  avatar?: string;
}

export interface Journal {
  uid: number;
  createTime: string;
  name: string;
  id: number;
  content: string;
  avatar?: string;
  updateTime: string;
}

export enum ListType {
  Thought,
  Journal,
}

export enum APICode {
  Success = 0,
  NotLogin = 1,
  UserExist = 12,
}
