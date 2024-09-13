import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'topstories';
  APIKey = "9ec6f98c-8248-403b-aba5-3cc6eb79598b";

  getStories(){
    
    //this.APIKey="check";
  }
}
