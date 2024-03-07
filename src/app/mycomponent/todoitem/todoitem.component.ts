import { Component, Input ,Output,EventEmitter,OnInit} from '@angular/core';
import { ToDo } from '../../Todo'; 

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo: ToDo = {} as ToDo; 
  @Input() i:number = 0;
  @Output() todoDelete: EventEmitter<ToDo>=new EventEmitter();
  @Output() todoCheckbox: EventEmitter<ToDo>=new EventEmitter();

  
  ngOnInit():void{

  }
  onClick(todo :ToDo){
    console.log("onclick method triggered")
    this.todoDelete.emit(todo);
  }
  onCheckbox(todo:ToDo){
    // console.log(todo);
     this.todoCheckbox.emit(todo);
    //  console.log(todo);
  }

}
