import React from 'react';
import { ThemeConsumer} from 'styled-components';

import Button from '../helpers/Button';

export default function ToggleMode(props) {
    return(
        <ThemeConsumer>
            {theme => (
                <Button variant="primary" className={props.class}
                    onClick={e => theme.setTheme(
                        theme.mode === 'dark'
                            ? {...theme, mode: 'light'}
                            : {...theme, mode: 'dark'})}
                >
                    {props.children}
                </Button>
            )}
        </ThemeConsumer>
    )
}
