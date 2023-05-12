import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostHistoryComponent implements OnInit {
  @Input({ required: true }) userId!: number;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/admin/users']);
  }
}
