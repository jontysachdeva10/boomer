import { jsx } from 'react/jsx-runtime';

const Margin = ({ space = 'none', children, left, right, top, bottom }) => {
    let className = ``;
    if (!left && !right && !top && !bottom)
        className = `bmr-margin-${space}`;
    if (left)
        className = `${className} bmr-margin-left-${space}`;
    if (top)
        className = `${className} bmr-margin-top-${space}`;
    if (bottom)
        className = `${className} bmr-margin-bottom-${space}`;
    if (right)
        className = `${className} bmr-margin-right-${space}`;
    return jsx("div", Object.assign({ className: className }, { children: children }));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
