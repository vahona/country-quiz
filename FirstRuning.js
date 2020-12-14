
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'
import { ButtonChoice, SignAlpha } from "./styled";



function FirstRuning(i) {
  const [country, setCountry] = useFeatch([i])
  const [isnext, setIsnext] = useState(false)

 console.log("pp", { ...[country]})

   const handleClick = (e) => {
     e.preventDefault();
     setIsnext(!isnext);
   }; 


   country.length = Math.floor(Math.random() * country.length);

  const bottonChoice = country.map((capitals) => {
    country.length = 1
    country.length = Math.floor(Math.random() * country.length);
    country.length < 2
    return (
      <div key={country.id}>
            {capitals.name}
      </div>
    );
  });



  //  {
  //    bottonChoice;
  //  }
  //  {
  //    isnext && (
  //      <>
  //        {country.map((capita) => {
  //          country.length = Math.floor(Math.random() * country.length);
  //          return (
  //            <div key={country.id}>
  //              <Link to="./FirstRuning">
  //                <button
  //                  className="button_choice"
  //                  onClick={handleClick}
  //                  key={country.id}
  //                >
  //                  {capita.name}
  //                </button>
  //              </Link>
  //            </div>
  //          );
  //        })}
  //        <Link to="./SecondRuning">
  //          {" "}
  //          <button onClick={handleClick} className="next">
  //            Next
  //          </button>
  //        </Link>
  //      </>
  //    );
  //  }

 


  return (
    <div>
      <h5> {country.capital} is the capital of</h5>
      <div>
        <Link to="./FirstRuning">
          <ButtonChoice className="button_choice" onClick={handleClick}>
            <SignAlpha> A </SignAlpha>
            {bottonChoice} 
          </ButtonChoice>
        </Link>
        <Link to="./FirstRuning">
          <ButtonChoice className="button_choice" onClick={handleClick}>
            <SignAlpha> B </SignAlpha> {bottonChoice}
          </ButtonChoice>
        </Link>
        <Link to="./FirstRuning">
          <ButtonChoice className="button_choice" onClick={handleClick}>
            <SignAlpha> C </SignAlpha> {bottonChoice}
          </ButtonChoice>
        </Link>
        <Link to="./FirstRuning">
          <ButtonChoice className="button_choice" onClick={handleClick}>
            <SignAlpha> D </SignAlpha> {bottonChoice}
          </ButtonChoice>
        </Link>
      </div>
    </div>
  );
}

export default FirstRuning

