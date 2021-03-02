import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  public note;
  idNote : number;

  constructor(private route : ActivatedRoute, public globalvar : GlobalVarService, private router : Router) { }

  ngOnInit() {
    this.idNote = parseInt(this.route.snapshot.paramMap.get('id'));
    this.note = this.globalvar.getNotes()[this.idNote];
  }

  favorite(){
    this.note.favorite = "yes";
    this.globalvar.changeNote(this.note,this.idNote);
  }

  seeFavorite(){
    this.router.navigate(['/hal3']);
  }

  backToHal1(){
    this.router.navigate(['/hal1']);
  }
}