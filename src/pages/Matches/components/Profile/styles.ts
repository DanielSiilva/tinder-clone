import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    align-content: center;
    gap: 1rem;
   
    padding: 8px;

    border: 1px solid ${props => props.theme['black']};
    border-radius: 8px;


    img{
        width: 40px;
        height: 40px;
        border-radius: 8px;
    }

    p{
        font-size: 24px;
        font-weight: bold;

    }


`