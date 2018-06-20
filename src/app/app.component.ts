import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nume: string;
  age: number;
  gasit: boolean;

  constructor(private httpClient: HttpClient) { }
  
  onKeyUp(event: any) {
    this.nume = event.target.value;
    this.gasit = false;
  }

  arataProfil() {
    this.httpClient.get(`http://my-json-server.typicode.com/metonel/json-faker/useri/?name=${this.nume}`).subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          this.gasit = true;
        }
      }
    )
  }

  salveazaProfil() {
    this.httpClient.post(`http://my-json-server.typicode.com/metonel/json-faker/useri/`, 
  {
    nume: 'Mark',
    age: "41"
  }).subscribe(
      (data:any) => {
        console.log(data);
        }
    )
  }

}
