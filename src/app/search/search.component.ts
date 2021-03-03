import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Tasks } from '../tasks';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() taskToSearch = new EventEmitter<string>();

  taskSearch: any;

  ngOnInit(): void {
    console.log(this.taskSearch)
  }

  Search(){
    this.taskToSearch.emit(this.taskSearch)
  }

}
