import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '@shared/components/page-title/page-title.component';
import { PageContentComponent } from '@shared/components/page-content/page-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, PageContentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
