import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  

  quote: Quotes[]=[
    new Quotes(
      'love',
      'John Green',
      'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
      'it tells more of the love life',
      new Date(2019,3,4)
    ),
    new Quotes(
      'war',
      'anonymous',
      'Our Generation has had no Great war, no Great Depression. Our war is spiritual. Our depression is our lives.',
      'tels of the strugles we go through',
      new Date(2019,3,4)
    ),
  ];
  addNewQuote(quote){
  
    quote.datepublished= new Date(quote.completeDate)
    this.quote.push(quote);
  }
  

  toggle(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
