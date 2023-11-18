import styled from "styled-components";

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    position:relative;

    background-color: #EEE;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    
    span,h3{
        display: block;
    }

`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;

    button:first-child{
        margin-right: 10px;
    }

    button{
        
    }
`;

export const Button = styled.button<{red?: boolean}>`

    text-transform: uppercase;
    padding: 6px 8px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid;
    background-color: ${props=>props.red? '#C23616': '#E1B12C'};
    color: white;

    &:hover{
        opacity: 0.8;
    }
`;

