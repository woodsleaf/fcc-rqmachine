import * as React from "react";
import { quotes } from "../data.json";

//destructuring-assignment
//let {quote, author} = rndQA(quotes);
//console.log(quote + ', ' + author);

export default function Home() {
  const previndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = React.useState(quotes[previndex].quote);
  const [author, setAuthor] = React.useState(quotes[previndex].author);

  const rndQA = (arrQ) => {
    let numberOfQuote = arrQ.length;
    let ind = Math.floor(Math.random() * numberOfQuote);
    setQuote(quotes[ind].quote);
    setAuthor(quotes[ind].author);
  }
  
  const handleChangeQuote = () => {
    rndQA(quotes);
  };

  return (
    <>
      <div id="quote-box">
        <div className="usableItems">
          <button id="new-quote"  onClick={handleChangeQuote} href="#">New quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet/#" target="_ blank">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div>
          <p id="text">
            <i className="fa fa-quote-left"></i>
            &nbsp;
            {quote}
          </p>
          <p id="author">
            -&nbsp;
            {author}
          </p>
        </div>
      </div>
    </>
  );
}
