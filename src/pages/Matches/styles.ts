
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


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;

    width: 100%;
    height: 30px;

    svg{
        color: ${props => props.theme['black']};
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    height: 80%;
    padding: 1rem;

    border: 1px solid ${props => props.theme['black']};
    border-radius: 8px;

    overflow-y: scroll;

`
