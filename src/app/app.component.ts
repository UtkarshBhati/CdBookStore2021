import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CD Bookstore';
  users;
  

  constructor(private httpClient: HttpClient){};

  getTest2(){
     
      return this.httpClient.get('/api/v1/getUsers');
      // .subscribe(()=>
      //   console.log(res);
      // );
  }
}
