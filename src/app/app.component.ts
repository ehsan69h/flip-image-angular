import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flip-image-angular';
  flip_x = true;
  flip_y = false;

  onFlipX() {
    this.flip_x = !this.flip_x;
  }
  onFlipY() {
    this.flip_y = !this.flip_y;
  }
}
