import { Injectable } from '@angular/core';
import {
  educationOpts,
  estatusOpts,
  genderOpts,
  locationOpts,
} from '../datas/index.data';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  genderOpts = genderOpts;
  estatusOpts = estatusOpts;
  educationOpts = educationOpts;
  locationOpts = locationOpts;
}
