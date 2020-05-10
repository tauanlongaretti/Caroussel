import React from "react";
import Arrow from "./images/Arrow.webp"
import styled from "styled-components";

const Card = styled.div`
  background: #e3e3e3;
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  width: 150px;
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
      <PrevArrow src={Arrow}/>
      {Data &&
        Data.map((card, i) => {
          return (
            <Card>
              <h1>{card.header}</h1>
              <p>{card.paragraph}</p>
            </Card>
          );
        })}
        <NextArrow src={Arrow}/>
    </Container>
  );
};

export default App;
