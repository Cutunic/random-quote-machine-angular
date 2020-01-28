import { Injectable } from '@angular/core';
import { allQuotes } from '../../assets/db/allQuotes';
import { allColors } from '../../assets/db/allColors';
import { Quote } from '../models/quote';



@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor() { }

  getQuote(rndNum: number){
    return allQuotes[rndNum];
  }
  getRandomQuoteNumber(){
    return Math.floor(((Math.random()*60)));
  }
  getRandomColorNumber(){
    return Math.floor(((Math.random()*10)));
  }
  getColor(rndNum: number){
    return allColors[rndNum];
  }
  setTwitter(quote: Quote){
    let path = this.generatePath(quote);
    window.open('//twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+path);
  }
  setFacebook(){
    window.open('http://www.facebook.com');
  }
  generatePath(quote: Quote){
    let path = '"' + quote.quote + '"%20' + quote.author;
    return path;
  }
}
// ?hashtags=quotes&related=freecodecamp&text="You%20can’t%20use%20up%20creativity.%20%20The%20more%20you%20use%2C%20the%20more%20you%20have."%20Maya%20Angelou