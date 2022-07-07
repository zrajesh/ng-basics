import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Rajesh';
  imageUrl = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'; 
  imageSrc = "A puppy";

  getName() {
    return this.name;
  }
  changeImage(event: KeyboardEvent) {
    this.imageUrl = (event.target as HTMLInputElement).value;
    this.imageSrc = "";
  }
  logImg(event: string) {
    console.log(event);
    
  }
}


