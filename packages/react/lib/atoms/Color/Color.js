import { jsx } from 'react/jsx-runtime';
import { Spacing } from '@boomer/foundation';

const Color = ({ hexCode, height = Spacing.sm, width = Spacing.sm }) => {
    const className = `bmr-width-${width} bmr-height-${height}`;
    return (jsx("div", { style: {
            backgroundColor: hexCode,
        }, className: className }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
