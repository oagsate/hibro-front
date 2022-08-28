import { Injectable } from "@angular/core";
import { educationOpts, estatusOpts, genderOpts } from "../datas/index.data";

@Injectable({
  providedIn:'root'
})
export class OptionService{
  genderOpts = genderOpts;
  estatusOpts = estatusOpts;
  educationOpts = educationOpts;
}
