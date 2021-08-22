
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  faCoffee = faTrash;
  faThumbsDown=faThumbsDown;
  faThumbsUp = faThumbsUp;

  
  // dislike: number =0;
  @Input() quote!:Quotes;
  @Output() remove = new EventEmitter<boolean>();
  noOflike: number =0;
  delete(complete:boolean){
    this.remove.emit(complete);
  }
  constructor() { }
 
  Like(){
    this.noOflike++; 
  }
  Dislike(){
    this.noOflike--;
  }
  ngOnInit(): void {
  }

}
