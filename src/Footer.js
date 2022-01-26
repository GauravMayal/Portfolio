import React from 'react';
import styled from 'styled-components';
import gmail_icon from './icons/gmail-logo.png';
import linkedin_icon  from './icons/linkedin-logo.png';


const FooterWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
padding: 2rem;
font-size : 2rem;
background-color: #6698c4;

.icon-container{
a{
    margin : 1rem;
    img{
        height: 2.5rem;
        width: 2.5rem;
    }
}
}
`

function Footer(){
    return (
            <FooterWrapper>
                <div className="icon-container">
                    <a href = "mailto:https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                        <img src = {gmail_icon} />
                    </a>
                    <a href = "mailto:https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                        <img src = {linkedin_icon} />
                    </a>
                </div>
                © Copyright 2022

            </FooterWrapper>
);
}

export default Footer;