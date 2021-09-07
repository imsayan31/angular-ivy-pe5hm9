import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);

    from([10, 15, 6])
      .pipe(
        map(item => item * 2),
        tap(item => console.log('emitted item ' + item)),
        map(item => {
          if (item === 12) {
            throw new Error(`${item} detected.`);
          }
          return item;
        }),
        take(2)
      )
      .subscribe(
        item => console.log(`resulting item ... ${item}`),
        err => console.error(`err occured ${err}`),
        () => console.log(`complete`)
      );
  }
}
