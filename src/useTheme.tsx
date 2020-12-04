import React, {useState, useEffect} from "react";
import storage from 'local-storage-fallback';

export default function useTheme(defaultTheme = {mode: 'light'}) {

    const [theme, _setTheme] = useState(getInitialTheme);

    // remember the mode use useEffect and storage
    function getInitialTheme() {
        // not in useState, cuz we access stoae and that is very expensive, so we accesss when needed
        const savedTheme = storage.getItem('theme');
        // check if there theme return and parse, otherwis retrun light as default
        //return savedTheme ? JSON.parse(savedTheme): {mode: 'light'} or
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    }

    useEffect(() => {
            // save theme in localstorage
            storage.setItem('theme', JSON.stringify(theme))

        },
        // useEffect is only called when them changed
        [theme]);
   return {
       ...theme,
       setTheme: ({setTheme, ...theme}) => _setTheme(theme)
   }
}
