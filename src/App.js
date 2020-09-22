import { Button } from 'antd';
import React from 'react';
import { GlobalStyle, MainWrapper } from "./App.styled";
import { Example, Section } from "./Section";


function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <div className="mainContainer">

        {/* BUTTON SECTION */}
        <Section title={`Button Section`} sub={`This area shows all the diffrent buttons we will use.`} >
          <Example title={`Default Button`} sub={`This button is the default for all the pages.`}>
            <Button type="primary">hi</Button>
          </Example>
          <Example title={`Default Button`} sub={`This button is the default for all the pages.`}>
            <Button type="primary">hi</Button>
          </Example>
          <Example title={`Default Button`} sub={`This button is the default for all the pages.`}>
            <Button type="primary">hi</Button>
          </Example>
        </Section>

        {/* MENU SECTION */}
        <Section title={`Menu Section`} sub={`This area shows all the diffrent menus we will use.`} >
          <Example title={`Not a Default Button<`} sub={`This button is the default for all the pages.`}>
            <Button type="primary">hi</Button>
          </Example>
        </Section>


      </div>
    </MainWrapper>
  );
}

export default App;
