export type VisualElement = {
    width: number;
    height: number;
}

export const calculator = {
    add: (first: number, second: number) => first + second,
    subtract: (first: number, second: number) => first - second,
    divide: (first: number, second: number) => {
        if (second === 0) {
            return -1;
        }
        return first / second;
    },
    getTotalWidth: (main: VisualElement, sideElements: VisualElement[]) => {
        const sideWidth = sideElements.reduce((acc, x) => acc + x.width, 0);
        return main.width - sideWidth;
    }
}
