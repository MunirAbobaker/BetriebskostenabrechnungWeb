import React from 'react';
import {ThemeConsumer} from 'styled-components';
import {Card as StyledCard} from '../../../helpers/Button';



export default function Wrapper(props) {
    return (
        <h1>not used</h1>
       /*  <ThemeConsumer>
            {theme => (
                <StyledCard variant="primary">
                    {props.children}
                </StyledCard>)}
        </ThemeConsumer> */
    )
}

