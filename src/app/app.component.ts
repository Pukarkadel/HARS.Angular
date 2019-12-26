import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyAngularProject';

  routerArray:any[]=[
    {component:"hotel",path:"/hotel"},
    {component:"customer",path:"/customer"}
    
  ]
}
