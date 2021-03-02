import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {

  notes = new Array();

  constructor() { }

  setNotes(obj){
    this.notes.push(obj);
  }
  
  getNotes(){
    return this.notes;
  }

  changeNote(obj, index){
    this.notes[index] = obj;
  }

  getFavorite(){
    var tempNotes = new Array();
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].favorite == "yes"){
        tempNotes.push(this.notes[i]);
      }
    }
    return tempNotes;
  }

}