import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);

    from([10, 15, 6]).subscribe(
      item => console.log(`resulting item ... ${item}`),
      err => console.error(`err occured ${err}`),
      () => console.log(`complete`)
    )
  }
}
