import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 10 vite2 xxxx';
  time = 0;

  ngOnInit(): void {
    setInterval(() => { this.time++ }, 1000)
  }
}
