import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
  }
`;

export const MainWrapper = styled.div`

    /* main body section */
    .mainContainer {
        width:900px;
        margin:0 auto;
        padding:40px 0;
    }

    /* this area of the styling is to help structure everything, almost like a documentation page */
    .section {
        padding:20px;
        margin-bottom:40px;
        border: 1px solid #dadada;
        .sectionHeader {
            border-bottom: 1px solid #dadada;
            .sectionTitle {
                font-size:35px;
                font-weight:bold;
                margin-bottom:0;
            }
            .sectionSub {
                font-size:15px;
                color:grey;
            }
        }
        .sectionExample {
            position: relative;
            padding: 0 30px;
            .exampleHeader {
                border-bottom: 1px solid #dadada;
                margin: 20px 0;
                padding:0 0 10px 0;
                .exampleTitle {
                    font-size:20px;
                    font-weight:bold;
                }
                .exampleSub {
                font-size:13px;
                color:grey;
                }
            }
        }
    }
`