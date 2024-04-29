export declare class Wime {
    /**
   * Array containing hexadecimal values.
   */
    private static hexValues;
    /**
     * Generates a random number between 0 and the specified length.
     * @param {number} Length The maximum length of the random number.
     * @returns {number} A random number between 0 and length.
     */
    private static getRandomNumber;
    /**
   * Generates a random hexadecimal color.
   * @returns {string}  A randomly generated hexadecimal color.
   */
    private static generateHex;
    /**
      * Displays HTML elements with the class ".wime" by assigning them a randomly generated shadow color.
      * @param {string[] | null} defaultColors An optional array of default colors to use, or null.
  */
    static showElements(defaultColors?: string[] | null): void;
}
