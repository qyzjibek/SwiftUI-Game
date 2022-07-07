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
        case 6:
            return {
                backgroundColor: "rgb(255, 214, 10)"
            }
        default: return;
    }
}