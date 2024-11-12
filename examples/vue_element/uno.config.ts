// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
    rules: [
        [/^ma-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
        [/^mx-([\.\d]+)$/, ([_, num]) => ({ "margin-left": `${num}px`, "margin-right": `${num}px` })],
        [/^my-([\.\d]+)$/, ([_, num]) => ({ "margin-top": `${num}px`, "margin-bottom": `${num}px` })],
        [/^ml-([\.\d]+)$/, ([_, num]) => ({ "margin-left": `${num}px` })],
        [/^mr-([\.\d]+)$/, ([_, num]) => ({ "margin-right": `${num}px` })],
        [/^mt-([\.\d]+)$/, ([_, num]) => ({ "margin-top": `${num}px` })],
        [/^mb-([\.\d]+)$/, ([_, num]) => ({ "margin-bottom": `${num}px` })],
        [/^ma-n([\.\d]+)$/, ([_, num]) => ({ margin: `-${num}px` })],
        [/^mx-n([\.\d]+)$/, ([_, num]) => ({ "margin-left": `-${num}px`, "margin-right": `-${num}px` })],
        [/^my-n([\.\d]+)$/, ([_, num]) => ({ "margin-top": `-${num}px`, "margin-bottom": `-${num}px` })],
        [/^ml-n([\.\d]+)$/, ([_, num]) => ({ "margin-left": `-${num}px` })],
        [/^mr-n([\.\d]+)$/, ([_, num]) => ({ "margin-right": `-${num}px` })],
        [/^mt-n([\.\d]+)$/, ([_, num]) => ({ "margin-top": `-${num}px` })],
        [/^mb-n([\.\d]+)$/, ([_, num]) => ({ "margin-bottom": `-${num}px` })],
        [/^pa-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
        [/^px-([\.\d]+)$/, ([_, num]) => ({ "padding-left": `${num}px`, "padding-right": `${num}px` })],
        [/^py-([\.\d]+)$/, ([_, num]) => ({ "padding-top": `${num}px`, "padding-bottom": `${num}px` })],
        [/^pl-([\.\d]+)$/, ([_, num]) => ({ "padding-left": `${num}px` })],
        [/^pr-([\.\d]+)$/, ([_, num]) => ({ "padding-right": `${num}px` })],
        [/^pt-([\.\d]+)$/, ([_, num]) => ({ "padding-top": `${num}px` })],
        [/^pb-([\.\d]+)$/, ([_, num]) => ({ "padding-bottom": `${num}px` })],
        [/^pb-([\.\d]+)$/, ([_, num]) => ({ "padding-bottom": `${num}px` })],
        [/^min-w-([\.\d]+)$/, ([_, num]) => ({ "min-width": `${num}px !important` })],
        [/^min-h-([\.\d]+)$/, ([_, num]) => ({ "min-height": `${num}px !important` })],
        [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}px !important` })],
        [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${num}px !important` })],
        // 间距
        [/^gap-([\.\d]+)$/, ([_, num]) => ({ gap: `${num}px` })],
        // 字号
        [/^text-([\.\d]+)$/, ([_, num]) => ({ "font-size": `${num}px` })],
        // 旋转
        [/^rotate-([\.\d]+)$/, ([_, num]) => ({ transform: `rotate(${num}deg)` })],
        // 字间距
        [/^ls-([\.\d]+)$/, ([_, num]) => ({ "letter-spacing": `${num}px` })],
        // 行间距
        [/^lh-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}px` })],
    ],
});
