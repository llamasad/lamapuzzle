import brushIcons from "./brushIcons";
import fillIcons from "./fillIcons";
import eraseIcon from "./eraseIcon.svg";

const toolsChangeColor = {
    pen: brushIcons,
    fill: fillIcons
};

const  normalTool = {
    eraser: eraseIcon,
}

const toolPickerIcons = {
    normalTool,
    toolsChangeColor
}
export default toolPickerIcons;