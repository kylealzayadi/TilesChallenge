import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OChallenge';
  addtiles() {
    var tiles = document.getElementById("Boy");
    tiles.insertAdjacentHTML("afterend", "<img id='boy' src='https://5.imimg.com/data5/MB/GF/MY-15175176/johnson-floor-tile-500x500.jpg'>") ;
  }
    
}
// function addtiles() {
//   var tiles = document.getElementById("Boy");
//   tiles.insertAdjacentHTML("afterend", "<img src='https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg'>");
// }

  

