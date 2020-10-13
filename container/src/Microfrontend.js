import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { types } from './redux/types'


// Recuperamos el nombre, el host y el parámetro history
const MicroFrontend = ({ name, host, history }) => {



    // const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const menuInjection = menu => {
        console.log("menu", menu)
        menu && dispatch({ type: types.ADD_MENU, payload: menu })
    }

    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            const options = window[`render${name}`](`${name}-container`, history);
            menuInjection(options?.menu)
            // deberíamos actualizar un estado global con los menús
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

export default React.memo(MicroFrontend);