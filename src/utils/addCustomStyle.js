export const addCustomStyle = (level) => {
    switch (level) {
        case 4:
            return {
                backgroundColor: "rgb(255, 69, 58)"
            }
        case 5:
            return {
                backgroundColor: "rgb(48, 209, 88)"
            }
        default: return;
    }
}