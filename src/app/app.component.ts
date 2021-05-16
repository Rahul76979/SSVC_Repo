import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularDemo1';
  showHomePage = true;

ngOnInit()
{
  this.showHome();
}

  showHome()
  {
    return this.showHomePage = !this.showHomePage;
    //this is committed code;
  }
}
