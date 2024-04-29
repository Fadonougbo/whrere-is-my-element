// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Wine {
    static hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    static getRandomNumber(Length) {
        return Math.floor(Math.random() * Length);
    }
    static generateHex() {
        const n1 = Wine.hexValues[Wine.getRandomNumber(Wine.hexValues.length)];
        const n2 = Wine.hexValues[Wine.getRandomNumber(Wine.hexValues.length)];
        const n3 = Wine.hexValues[Wine.getRandomNumber(Wine.hexValues.length)];
        const n4 = Wine.hexValues[Wine.getRandomNumber(Wine.hexValues.length)];
        const n5 = Wine.hexValues[Wine.getRandomNumber(Wine.hexValues.length)];
        const n6 = Wine.hexValues[Wine.getRandomNumber(Wine.hexValues.length)];
        const hex = `#${n1}${n2}${n3}${n4}${n5}${n6}`;
        return hex;
    }
    static showElement(defaultColors = null) {
        const se = document.querySelectorAll(".wime");
        for (const el of se) {
            let color = Wine.generateHex();
            if (Array.isArray(defaultColors) && defaultColors.length > 0) {
                color = defaultColors[Wine.getRandomNumber(defaultColors.length)];
            }
            el.style.setProperty("box-shadow", `0.2rem 0.2rem  ${color} inset,-0.2rem -0.2rem ${color} inset`);
        }
    }
}
Wine.showElement();
