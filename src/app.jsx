import React from "react";
import Home from "./pages/home";
// Import and apply CSS stylesheet
import "./styles/styles.css";
// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';
/*
<link 
rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
/>
*/

export default function () {
  return (
    <>
      <Seo />
      <main>
        <div>
          <Home />
        </div>
      </main>
    </>
  );
}
