import React from "react";
import styled from "styled-components";
const MainSectionWrapper=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: fit-content;
    height: fit-content;
    background-color: aquamarine;
    img{
        height: 10rem;
        width: 12rem;
        object-fit: cover;
    }
    .about
    {
        margin-left: 2rem;
        font-size: small;
        width: 20rem;
    }
    .content
    {
        font-size: small;
        color:blueviolet ;
    }
`
    


function MainSection()
{

    return(<MainSectionWrapper>
            <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
            <div className="about">
                <h1>About me</h1>
                <div className="content">
                For example, the command lorem_nowrap_wrap40 will insert Lorem Ipsum text with a word wrap width of 40 characters and the command lorem_wrap40_nowrap will insert Lorem Ipsum text with no word wrapping. 
                </div>
            </div>
        </MainSectionWrapper>

    )

}
export default MainSection