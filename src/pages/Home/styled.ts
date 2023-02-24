import styled from "styled-components";


export const Wrapper =styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 1rem;

    margin: 0 auto;



`


export const LogoContainer = styled.img`
    width: 33.98px;
    height: 33.98px;

`
export const Content = styled.div`
    border: 1px solid red;

    width: 100%;
    height: 80%;

    color: black;

`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 210px;
    height: 50px;


    button{
        background-color: transparent;
        cursor: pointer;
        border: none;

    }

`