export const getRandomNumber = (Length) => {
    return Math.floor(Math.random() * Length);
};
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
export const generateHex = () => {
    const n1 = hexValues[getRandomNumber(hexValues.length)];
    const n2 = hexValues[getRandomNumber(hexValues.length)];
    const n3 = hexValues[getRandomNumber(hexValues.length)];
    const n4 = hexValues[getRandomNumber(hexValues.length)];
    const n5 = hexValues[getRandomNumber(hexValues.length)];
    const n6 = hexValues[getRandomNumber(hexValues.length)];
    const hex = `#${n1}${n2}${n3}${n4}${n5}${n6}`;
    return hex;
};
