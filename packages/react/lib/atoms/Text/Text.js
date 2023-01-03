import { jsx } from 'react/jsx-runtime';
import { FontSizes } from '@boomer/foundation';

const Text = ({ size = FontSizes.base, content }) => {
    const className = `bmr-text bmr-text-${size}`;
    return jsx("p", Object.assign({ className: className }, { children: content }));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
