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
background: #e3e3e3;
border: 1px solid black;
padding: 10px;
margin: 20px;
width: 150px;
text-align: center;
`;

const PrevCard = styled.div`
background: #e3e3e3;
border: 1px solid black;
padding: 10px;
margin: 20px;
width: 150px;
text-align: center;
`;

const App = props => {


  let [count, setCount] = useState(0);


  const nextCard = (event) => {
    setCount(count + 1);
  };




  const Data = [
    { header: "First", paragraph: "This is the first paragraph" },
    { header: "Second", paragraph: "This is the second paragraph" },
    { header: "Third", paragraph: "This is the third paragraph" },
    { header: "Fourth", paragraph: "This is the fourth paragraph" },
    { header: "Fifth", paragraph: "This is the fifth paragraph" }
  ];


  return (
    <Container>
      <PrevArrow src={Arrow} />
      <PrevCard>
        <h1>{Data[count + 1].header}</h1>
        <p>{Data[count + 1].paragraph}</p>
      </PrevCard>
      <Card>
        <h1>{Data[count].header}</h1>
        <p>{Data[count].paragraph}</p>
      </Card>
      {(() => {
        if (count > 0) {
          return (<NextCard>
            <h1>{Data[count - 1].header}</h1>
            <p>{Data[count - 1].paragraph}</p>
          </NextCard>)
        } else {
          return (<NextCard>
            <h1>BACK</h1>
            <p>This is the back of card</p>
          </NextCard>)
        }
      })()}
      <NextArrow src={Arrow} onClick={nextCard} />
    </Container>
  );
};

export default App;
