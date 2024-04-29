// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Wime {
    /**
   * Array containing hexadecimal values.
   */
    static hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    /**
     * Generates a random number between 0 and the specified length.
     * @param {number} Length The maximum length of the random number.
     * @returns {number} A random number between 0 and length.
     */
    static getRandomNumber(Length) {
        return Math.floor(Math.random() * Length);
    }
    /**
   * Generates a random hexadecimal color.
   * @returns {string}  A randomly generated hexadecimal color.
   */
    static generateHex() {
        const n1 = Wime.hexValues[Wime.getRandomNumber(Wime.hexValues.length)];
        const n2 = Wime.hexValues[Wime.getRandomNumber(Wime.hexValues.length)];
        const n3 = Wime.hexValues[Wime.getRandomNumber(Wime.hexValues.length)];
        const n4 = Wime.hexValues[Wime.getRandomNumber(Wime.hexValues.length)];
        const n5 = Wime.hexValues[Wime.getRandomNumber(Wime.hexValues.length)];
        const n6 = Wime.hexValues[Wime.getRandomNumber(Wime.hexValues.length)];
        const hex = `#${n1}${n2}${n3}${n4}${n5}${n6}`;
        return hex;
    }
    /**
      * Displays HTML elements with the class ".wime" by assigning them a randomly generated shadow color.
      * @param {string[] | null} defaultColors An optional array of default colors to use, or null.
  */
    static showElements(defaultColors = null) {
        const se = document.querySelectorAll(".wime");
        for (const el of se) {
            let color = Wime.generateHex();
            if (Array.isArray(defaultColors) && defaultColors.length > 0) {
                color = defaultColors[Wime.getRandomNumber(defaultColors.length)];
            }
            el.style.setProperty("box-shadow", `0.2rem 0.2rem  ${color} inset,-0.2rem -0.2rem ${color} inset`);
        }
    }
}
Wime.showElements();
