import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { estatusOpts, genderOpts, Messages } from 'src/app/datas/index.data';
import { User } from 'src/app/models/index.model';
import { JournalService } from 'src/app/services/journal.service';
import { OptionService } from 'src/app/services/option.service';
import { UserService } from 'src/app/services/user.service';
import tinymce from 'tinymce';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
})
export class JournalComponent implements OnInit {
  editorInitValue = {
    base_url: '/tinymce', // Root for resources
    suffix: '.min', // Suffix to use when loading resources
    plugins:
      'preview importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar:
      'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [
      { title: 'My page 1', value: 'https://www.tiny.cloud' },
      { title: 'My page 2', value: 'http://www.moxiecode.com' },
    ],
    image_list: [
      { title: 'My page 1', value: 'https://www.tiny.cloud' },
      { title: 'My page 2', value: 'http://www.moxiecode.com' },
    ],
    image_class_list: [
      { title: 'None', value: '' },
      { title: 'Some class', value: 'class-name' },
    ],
    importcss_append: true,
    templates: [
      {
        title: 'New Table',
        description: 'creates a new table',
        content:
          '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...',
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content:
          '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
      },
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar:
      'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    // toolbar_mode: 'sliding',
    contextmenu: 'link image imagetools table',
    skin: 'tinymce-5',
    content_css: 'default',
    content_style:
      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    branding: false,
    promotion: false,
    language: 'zh_CN',
  };

  journalId?: number;
  content = '';

  constructor(
    private userSvc: UserService,
    public optSvc: OptionService,
    private msgSvc: NzMessageService,
    private router: Router,
    private journalSvc: JournalService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParamMap.subscribe((v) => {
      this.journalId = parseInt(v.get('id') ?? '');
      this.prepareData(this.journalId);
    });
  }

  ngOnInit() {
    return;
  }
  prepareData(id?: number) {
    if (id) {
      this.journalSvc.getById(id).subscribe((res) => {
        this.content = res.content;
      });
    }
  }

  onSubmit() {
    const content = tinymce.activeEditor?.getContent();
    const brief = tinymce.activeEditor
      ?.getContent({ format: 'text' })
      ?.slice(0, 100);
    this.journalSvc
      .create({
        content,
        brief,
      })
      .subscribe(() => {
        this.msgSvc.success(Messages.OperationOk);
        this.router.navigateByUrl('/space');
      });
  }
  sanitize(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
