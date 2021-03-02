import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.component.html',
  styleUrls: ['./hal3.component.css']
})
export class Hal3Component implements OnInit {

  notes = new Array();

  constructor(private router : Router, public globalvar : GlobalVarService) { }

  ngOnInit() {
    this.notes = this.globalvar.getFavorite();
  }

  backToHal1(){
    this.router.navigate(['/hal1']);
  }

}