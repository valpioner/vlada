import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Mp, MpsData } from '../shared/models/open-data/mps-data';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {
  photo$: Observable<string | undefined> | undefined;

  mpsData!: MpsData;
  person!: Mp;
  fullName!: string;

  constructor(private _api: ApiService) {
    this._api.getMpsData().subscribe((mpsData: MpsData) => {
      this.mpsData = mpsData;
      // console.log(this.mpsData);
      // console.log(this.mpsData.mps[0]);
      this.person = this.mpsData?.mps[0];

      this.getPersonPhoto();
    });
  }

  ngOnInit(): void {}

  getPersonPhoto() {
    this.fullName = `${this.person?.surname} ${this.person?.firstname} ${this.person?.patronymic}`;

    this.photo$ = this._api.getMpsPhoto().pipe(
      // tap((i) => console.log('gogogo', i)),
      map((photos) => photos.find((photo) => photo.name === this.fullName)?.id)
    );
  }
}
