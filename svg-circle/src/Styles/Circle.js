import styled, { keyframes } from 'styled-components';

const NoTransform = styled.div`display: inline`
export{ NoTransform }

const transform = keyframes`
    from {
    transform: scaleX(1);
    }

    to {
    transform: scaleX(2);
    }
`;

const Transform = styled.div`
    display: inline-block;
    animation: ${transform} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;  
export{ Transform }