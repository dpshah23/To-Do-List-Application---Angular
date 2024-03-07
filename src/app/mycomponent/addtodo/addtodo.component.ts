import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { ToDo } from '../../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent implements OnInit{
title:string="";
desc:string="";
@Output() todoAdd: EventEmitter<ToDo>=new EventEmitter();

constructor(){}
ngOnInit(): void {
    
}
onSubmit(){
  const todo={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
  }
  this.todoAdd.emit(todo);
}
}
