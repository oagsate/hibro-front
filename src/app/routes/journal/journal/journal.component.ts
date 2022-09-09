import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { estatusOpts, genderOpts } from 'src/app/datas/index.data';
import { User } from 'src/app/models/index.model';
import { OptionService } from 'src/app/services/option.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
})
export class JournalComponent implements OnInit {
  content = '';

  editorInitValue = {
    base_url: '/tinymce', // Root for resources
    suffix: '.min', // Suffix to use when loading resources
    height: 500,
    // menubar: false,
    // plugins: [
    //   'advlist autolink lists link image charmap print preview anchor',
    //   'searchreplace visualblocks code fullscreen',
    //   'insertdatetime media table paste code help wordcount',
    // ],
    // toolbar:
    //   'undo redo | formatselect | bold italic backcolor | \
    //    alignleft aligncenter alignright alignjustify | \
    //    bullist numlist outdent indent | removeformat | help',
  };

  constructor(
    private userSvc: UserService,
    public optSvc: OptionService,
    private msgSvc: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    return;
  }

  onSubmit() {}
}
