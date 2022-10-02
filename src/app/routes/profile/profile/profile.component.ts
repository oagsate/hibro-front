import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { estatusOpts, genderOpts, Messages } from 'src/app/datas/index.data';
import { User } from 'src/app/models/index.model';
import { ImageService } from 'src/app/services/image.service';
import { OptionService } from 'src/app/services/option.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  content = '';
  loading = false;
  avatarUrl?: string;
  file?: File;
  user = this.userSvc.user!;

  form = new FormGroup({
    estatus: new FormControl(null),
    education: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    location: new FormControl(null),
    description: new FormControl(null),
  });

  get oldAvatarUrl() {
    return `${environment.url}images/${this.user.id}/${this.user.avatar}`;
  }

  constructor(
    private userSvc: UserService,
    public optSvc: OptionService,
    private msgSvc: NzMessageService,
    private router: Router,
    private imageSvc: ImageService
  ) {}

  ngOnInit() {
    this.userSvc.getSelf().subscribe((res) => {
      this.form.patchValue({
        ...res,
        location: res.location?.split('='),
      });
    });
  }

  onSubmit() {
    const value = this.form.value;
    this.userSvc
      .update({
        id: this.userSvc.user?.id!,
        ...value,
        location: value.location && value.location.join('='),
      })
      .subscribe((res) => {
        this.userSvc.init(res);
        this.msgSvc.success('操作成功');
        this.router.navigateByUrl('/space');
      });
  }

  beforeUpload = (file: NzUploadFile) => {
    const f = file as unknown as File;
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.msgSvc.error('You can only upload JPG file!');
    }
    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msgSvc.error('Image must smaller than 2MB!');
    }
    if (isJpgOrPng && isLt2M) {
      this.getBase64(f, (img: string) => {
        this.loading = false;
        this.avatarUrl = img;
      });
      this.file = f;
    }
    return false;
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  onUpload() {
    const formData = new FormData();
    formData.append('image', this.file!);
    this.imageSvc.upload(formData).subscribe((res) => {
      this.msgSvc.success(Messages.OperationOk);
      this.userSvc.user!.avatar = res;
      this.avatarUrl = undefined;
    });
  }
}
