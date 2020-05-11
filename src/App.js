import React, { useState } from "react";
import Arrow from "./images/Arrow.webp";
import styled from "styled-components";

const Card = styled.div`
  font-size: 2em;
  background: #e3e3e3;
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  width: 300px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  align-items: center;
`;

const NextArrow = styled.img`
  width: 5%;
  height: 5%;
`;

const PrevArrow = styled.img`
  width: 5%;
  height: 5%;
  transform: scaleX(-1);
`;

const NextCard = styled.div`
  color: gray;
  background: gray;
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  width: 150px;
  text-align: center;
`;

const PrevCard = styled.div`
  color: gray;
  background: gray;
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  width: 150px;
  text-align: center;
`;

const BackCard = styled.div`
  color: white;
  background: white;
  border: 1px solid white;
  padding: 10px;
  margin: 20px;
  width: 150px;
  text-align: center;
`;

const App = props => {
  let [count, setCount] = useState(0);

  const nextCard = () => {
    setCount(count + 1);
  };

  const checkForNext = () => {
    if(count < (Data.length - 1)) {
      nextCard()
    } 
  }

  const prevCard = () => {
    setCount(count - 1);
  };

  const checkForPrev = () => {
    if(count > (0)) {
      prevCard()
    } 
  }

  const Data = [
    { header: "First", paragraph: "This is the first paragraph" },
    { header: "Second", paragraph: "This is the second paragraph" },
    { header: "Third", paragraph: "This is the third paragraph" },
    { header: "Fourth", paragraph: "This is the fourth paragraph" },
    { header: "Fifth", paragraph: "This is the fifth paragraph" }
  ];

  return (
    <Container>
      <PrevArrow id="prev-button" src={Arrow} onClick={checkForPrev}/>
      {(() => {
        if (count < 4) {
          return (
            <PrevCard>
              <h1>{Data[count + 1].header}</h1>
              <p>{Data[count + 1].paragraph}</p>
            </PrevCard>
          );
        } else {
          return (
            <BackCard>
              <h1>Back</h1>
              <p>This is the back of card</p>
            </BackCard>
          );
        }
      })()}
      <Card id="main">
        <h1>{Data[count].header}</h1>
        <p>{Data[count].paragraph}</p>
      </Card>
      {(() => {
        if (count > 0) {
          return (
            <NextCard>
              <h1>{Data[count - 1].header}</h1>
              <p>{Data[count - 1].paragraph}</p>
            </NextCard>
          );
        } else {
          return (
            <BackCard>
              <h1>Back</h1>
              <p>This is the back of card</p>
            </BackCard>
          );
        }
      })()}
      <NextArrow id="next-button" src={Arrow} onClick={checkForNext} />
    </Container>
  );
};

export default App;
