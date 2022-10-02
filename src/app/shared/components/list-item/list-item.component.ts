import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ListType, User } from 'src/app/models/index.model';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less'],
})
export class ListItemComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() uid?: number;
  @Input() selfId?: number;
  @Output() delete: EventEmitter<{ id: number; type: ListType }> =
    new EventEmitter();

  ListType = ListType;

  constructor(private userSvc: UserService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  onDeleteClick(id: number, type: ListType) {
    this.delete.emit({ id, type });
  }

  getAvatarUrl(item: any) {
    return `${environment.url}images/${item.uid}/${item.avatar}`;
  }

  sanitize(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  jump(uid: number) {
    window.open(`/#/space?uid=${uid}`, '_blank');
  }

  onReadClick(id: number) {
    window.open(`/#/journal/${id}`, '_blank');
  }
}
