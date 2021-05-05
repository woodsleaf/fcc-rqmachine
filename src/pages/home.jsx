import * as React from "react";
import { quotes } from "../data.json";

// Utility function to choose a random object from the quotes array
const rndQA = (arrQ) => {
  let numberOfQuote = arrQ.length;
  let ind = Math.floor(Math.random() * numberOfQuote);
  return quotes[ind];
}
//let result = rndQA(quotes);
//console.log(result);
// console.log(quotes[ind].quote);
// console.log(quotes[ind].author);
// const randomArrayQuoteAuthor = [quotes[ind].quote, quotes[ind].author];
// console.log(randomArrayQuoteAuthor);

//destructuring-assignment
//let {quote, author} = rndQA(quotes);
//console.log(quote + ', ' + author);

export default function Home() {
  let {quote, author} = rndQA(quotes);
  const [hello, setQuote] = React.useState('');

  const handleChangeQuote = () => {
    // Choose a new Hello from our languages
    const newQuote = rndQA(quotes);
    // And set it in our components state
    setQuote(newQuote.quote + ', ' + newQuote.author);
    //return newQuote;
  };
  return (
    <>

      <div id="quote-box">
      <i className="fa fa-quote-left"></i>
        <p id="text">
          &nbsp;
          {quote}
        </p>
        <p id="author">
          {author}
        </p>
        <div className="usableItems">
          <button id="new-quote"  onClick={handleChangeQuote} href="#">New quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet/#" target="_ blank">
            <i className="fa fa-twitter"></i>
            &nbsp;
            Tweet quote
          </a>
        </div>
      </div>
    </>
  );
}
