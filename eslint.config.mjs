// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
    {
        vue: true,
        typescript: true,
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    },
    {
        ignores: [
            "scripts/*",
            "server/*",
            "webpack.config.js",
            "tsconfig.json",
            "public/*",
            "node_modules"
        ],
    }
)