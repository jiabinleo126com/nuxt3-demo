// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
    {
        vue: true,
        typescript: true,
    },
    {
        rules: {
            // "comma-dangle": ["warn", "any"],  // 禁止尾随逗号
            // "semi": ["warn", "any"],         // 禁止分号
            // "object-curly-spacing": ["warn", "any"], // 对象花括号内需要空格
            // "array-bracket-spacing": ["warn", "any"], // 数组方括号内不要空格
            // "no-console": ["warn", { allow: ["warn", "any"] }], // 正确格式
            "vue/html-self-closing": ["warn", {
                "html": {
                    "void": "any",    // void 元素可自闭合或非自闭合
                    "normal": "never", // 普通元素必须非自闭合
                    "component": "always" // 组件必须自闭合
                },
                "svg": "always",     // SVG 必须自闭合
                "math": "always"     // MathML 必须自闭合
            }]
        },
        plugins: []
    },
    {
        ignores: [
            "webpack.config.js",
            "tsconfig.json",
            ".nuxt/",
            "dist/",
            "node_modules/",
            "**/*.d.ts",
            "*.output.js",
            "product-page",
            "product-dist",
            "scripts/**",
            "eslint.config.mjs",
            "public",
            "README.md"
        ]
    })