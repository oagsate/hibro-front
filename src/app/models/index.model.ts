export interface SelectOpt{
  value:string|number;
  label:string;
  [key:string]:any;
}


export interface RO{
    code:number;
    desc:string;
    data:any;
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
	height: number;
	weight: number;
	education: number;
	location: number;
	description?: any;
	email?: any;
	estatus: number;
}
