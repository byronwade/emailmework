import { Button } from 'antd';
import React from 'react';
import { GlobalStyle, MainWrapper } from "./App.styled";


function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <div className="mainContainer">

        {/* BUTTON SECTION */}
        <section className="section">
          <div className="sectionHeader">
            <h1 className="sectionTitle">Button Section</h1>
            <p className="sectionSub">This area shows all the diffrent buttons we will use.</p>
          </div>
          <div className="sectionExample">
            <div className="exampleHeader">
              <div className="exampleTitle">Default Button</div>
              <div className="exampleSub">This button is the default for all the pages.</div>
            </div>
            <Button type="primary">hi</Button>
          </div>
          <div className="sectionExample">
            <div className="exampleHeader">
              <div className="exampleTitle">Not a Default Button</div>
              <div className="exampleSub">This button is the default for all the pages.</div>
            </div>
            <Button type="primary">hi</Button>
          </div>
        </section>

        {/* MMENU SECTION */}
        <section className="section">
          <div className="sectionHeader">
            <h1 className="sectionTitle">Menu Section</h1>
            <p className="sectionSub">This area shows all the diffrent menus we will use.</p>
          </div>
          <div className="sectionExample">
            <div className="exampleHeader">
              <div className="exampleTitle">Not a Default Button</div>
              <div className="exampleSub">This button is the default for all the pages.</div>
            </div>
            <Button type="primary">hi</Button>
          </div>
        </section>


      </div>
    </MainWrapper>
  );
}

export default App;
