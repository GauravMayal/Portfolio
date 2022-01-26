import React from "react";
import styled from "styled-components";
import logo from "./logo.jpg"



const HeaderWrapper=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #6698c4;
    img{
        height: 5rem;
        width: 5rem;
        border-radius: 2.5rem;
        object-fit: cover;
    }
    .button-container{
        button{
            height: 2rem;
            padding: 0 1rem;
            margin-left: 1rem;
            border-radius: 1rem;
            transition: color 1s, background-color 1s;
            :hover{
                color: whitesmoke;
                background-color: black;
            }
   
        }
    }
`



function Header()
{
    return (<HeaderWrapper>

        <img src={logo} />

        <div className="button-container">
            <button>Home</button>
            <button>Interests</button>
            <button>Achievements</button>
            <button>About</button>
        </div>

        </HeaderWrapper>)
}

export default Header