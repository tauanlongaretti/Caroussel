import React from "react";
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
        <h1>{Data[2].header}</h1>
        <p>{Data[2].paragraph}</p>
      </PrevCard>
      <Card>
        <h1>{Data[1].header}</h1>
        <p>{Data[1].paragraph}</p>
      </Card>
      <NextCard>
        <h1>{Data[0].header}</h1>
        <p>{Data[0].paragraph}</p>
      </NextCard>
      <NextArrow src={Arrow} />
    </Container>
  );
};

export default App;
