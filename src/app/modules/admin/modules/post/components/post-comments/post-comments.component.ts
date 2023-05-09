import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCommentsComponent {

}
