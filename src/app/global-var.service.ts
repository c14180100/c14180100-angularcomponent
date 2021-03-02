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

}