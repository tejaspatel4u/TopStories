import { Component } from '@angular/core';
import { multicast } from 'rxjs/operators';
import { APIService } from './api.service';
import { HttpProviderService } from './http-provider.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Top Stories';
  APIKey = "9ec6f98c-8248-403b-aba5-3cc6eb79598b";
  stories: any;

  constructor(private toastr: ToastrService, private httpProviderService: HttpProviderService) { }

  getStories() {
    this.httpProviderService.getAllStories(this.APIKey).subscribe((data: any) => {
      this.stories = data;
      console.log(this.stories.body);
    },
      err => {
        if (err.status === 401) {
          this.toastr.error('Unauthorized Access');
        }
        else
          this.toastr.error(err);
      });
  }

  getImage(Multimedia: any[]) {
    if (Multimedia) {
      return Multimedia[0].url;
    }

    return '';
  }
}
