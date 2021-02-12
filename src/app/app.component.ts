import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from './common/Users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CD Bookstore';
  users : Users;
  textValue:string;

  constructor(private httpClient: HttpClient){};
  updateTextValue(event:Event){
    this.textValue=(<HTMLInputElement>event.target).value;
  }
  getTest2(data:any){
     
      this.httpClient.get<Users>('/api/getUsers/'+this.textValue,{
        params: {
          param: this.textValue
        }}).subscribe(resp => {
        // display its headers
        //console.log(resp.keys);
        this.users=resp;
      });
  }
}
