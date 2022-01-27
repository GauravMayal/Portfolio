import React from "react";
import styled from "styled-components";
import logo from "./logo2.jpg"



const HeaderWrapper=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: lightsteelblue;
    img{
        height: 3rem;
        width: 3rem;
        border-radius: 2.5rem;
        object-fit: cover;
    }
    .button-container{
        /*button{
            height: 2rem;
            padding: 0 1rem;
            margin-left: 1rem;
            border-radius: 1rem;
            transition: color 1s, background-color 1s;
            :hover{
                color: whitesmoke;
                background-color: black;
            }
   
        }*/
        button{
            margin-left: 1rem;
            border-radius: 1rem;
            padding: 0 1rem;
            height: 2rem;
            border-color: gray;
            border-width:0.0px;
            margin-top:1%;
            box-shadow: 0 0 0 0.063rem rgba(0, 0, 0, 0.2);
            transition: color 1s, background-color 1s;
            :hover{
                 box-shadow:0 0.125rem 0.625rem rgba(0,0,0,.2);
                 border-color: transparent;
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