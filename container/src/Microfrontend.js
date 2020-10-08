import React, { useEffect } from "react";

// Recuperamos el nombre, el host y el parámetro history
function MicroFrontend({ name, host, history }) {
    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            window[`render${name}`](`${name}-container`, history);
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

export default MicroFrontend;