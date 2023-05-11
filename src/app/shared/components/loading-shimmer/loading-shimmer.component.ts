import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-shimmer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-shimmer.component.html',
  styleUrls: ['./loading-shimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingShimmerComponent {

  @HostBinding('class') class = 'shimmer-loading';

  @Input() width = '100%';
  @Input() height = '12px';
  @Input() shape: 'circle' | 'square' | 'rect' = 'rect';
  @Input() borderRadius = '5px';
  @Input() direction: 'ltr' | 'rtl' = 'ltr';

  constructor() {}

  ngOnInit() {}

  get shimmerHeight(): string {
    switch (this.shape) {
      case 'circle':
        return this.width;
      case 'square':
        return this.width;
      case 'rect':
        return this.height;
      default:
        return this.height;
    }
  }

  get shimmerBorderRadius(): string {
    return this.shape === 'circle' ? '50%' : this.borderRadius;
  }

}
