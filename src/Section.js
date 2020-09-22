import React from 'react';


function Section({ title, sub, children }) {
  return (
    <section className="section">
        <div className="sectionHeader">
            <h1 className="sectionTitle">{title}</h1>
            <p className="sectionSub">{sub}</p>
        </div>
        {children}
    </section>
  );
}

function Example({ title, sub, children }) {
    return (
      <div className="sectionExample">
          <div className="exampleHeader">
              <div className="exampleTitle">{title}</div>
              <div className="exampleSub">{sub}</div>
          </div>
          {children}
      </div>
    );
  }

export { Section, Example };
