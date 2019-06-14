import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
peoples
  constructor(private backend:BackendService) { }

  ngOnInit() {
    this.backend.getUsers().subscribe(res=>{
      this.peoples=res
    })
  }


  addUser(wewef){
this.backend.saveUser('asjdasd',wewef).subscribe()
  }
  
}
