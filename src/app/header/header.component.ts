import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  model:any = {}
  constructor() { }

  ngOnInit(): void {
    
  
  }
  getFormData(){
    console.log(JSON.stringify(this.model))
  }
 

}
