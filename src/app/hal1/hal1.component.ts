import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from '../global-var.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {

  judul : String;
  isi : String;
  tanggal : Date;
  notes = new Array();

  constructor(public globalvar : GlobalVarService, private router : Router) { }

  ngOnInit() {
    this.notes = this.globalvar.getNotes();
  }

  simpan(){
    var note = {
      judul: this.judul,
      isi: this.isi,
      tanggal: this.tanggal,
      favorite : "no"
    }
    this.globalvar.setNotes(note);
    this.notes = this.globalvar.getNotes();
  }

  showDetails(index){
    this.router.navigate(["/hal2/" + index]);
  }

  seeFavorite(){
    this.router.navigate(['/hal3']);
  }

}