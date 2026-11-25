// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    fonts: [
        {
            provider: fontProviders.google(),
            name: "Orbitron",
            cssVariable: "--fuente-titulos"
        },
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--fuente-textos"
        }
    ]

});
