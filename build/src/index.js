import { generateHex, getRandomNumber } from "./helper.js";
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Wine {
    static showElement(defaultColors = null) {
        const se = document.querySelectorAll(".wime");
        for (const el of se) {
            let color = generateHex();
            if (Array.isArray(defaultColors) && defaultColors.length > 0) {
                color = defaultColors[getRandomNumber(defaultColors.length)];
            }
            el.style.setProperty("box-shadow", `2px 2px  ${color} inset,-2px -2px ${color} inset`);
        }
    }
}
Wine.showElement();
