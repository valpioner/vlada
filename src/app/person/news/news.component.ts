import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
