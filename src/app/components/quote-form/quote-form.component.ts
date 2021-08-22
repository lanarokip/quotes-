import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newquotes = new Quotes("","","","",new Date());
  @Output() addquote = new EventEmitter <Quotes>();
  submitQuotes(){
    this.addquote.emit(this.newquotes)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
