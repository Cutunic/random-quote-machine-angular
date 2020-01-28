import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MachineService } from '../../services/machine.service';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  quote: Quote;
  rndQuoteNumber: number;
  rndColorNumber: number;
  color: string;

  @Output() onColor: EventEmitter<string> = new EventEmitter();

  // izmjenio css var ... sad to trebam poslat parentu i onda probat isto to napravit sa --bg-color
  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--main-color: ${this.color}`);
  }
  constructor(private machineService: MachineService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.refresh();
  }
  
  onNewQuote(){
    this.refresh();
  }
  onTwitter(){
    this.machineService.setTwitter(this.quote);
  }
  onFacebook(){
    this.machineService.setFacebook();
  }
  refresh(){
    this.rndQuoteNumber = this.machineService.getRandomQuoteNumber();
    this.quote = this.machineService.getQuote(this.rndQuoteNumber);

    this.rndColorNumber = this.machineService.getRandomColorNumber();
    this.color = this.machineService.getColor(this.rndColorNumber);

    this.onColor.emit(this.color);
  }
}
