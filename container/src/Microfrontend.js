import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { types } from './redux/types'


// Recuperamos el nombre, el host y el parámetro history
const MicroFrontend = props => {

    const { name, host } = props;

    const dispatch = useDispatch()

    const menuInjection = menu => {
        menu && dispatch({ type: types.ADD_MENU, payload: menu })
    }

    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            const options = window[`render${name}`](`${name}-container`, props);
            // actualizamos el estado global con los menús
            menuInjection(options?.menu)
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        // Del microfrontend recuperamos el manifest del build
        // y creamos un script usando el main.js 
        fetch(`${host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    // Usamos la función necesaria para renderizarlo
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
        };
    });

    return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
    document,
    window,
};

// Uso el memo para evitar renderizados innecesarios
export default React.memo(MicroFrontend);