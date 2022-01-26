import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection'


const BodyWrapper = styled.div`
    background-color: lightcoral;
    display: flex;
    justify-content: center;
   
`

function Body() {
    return (
       <BodyWrapper>
           <MainSection />
       </BodyWrapper>
    );
}

export default Body;