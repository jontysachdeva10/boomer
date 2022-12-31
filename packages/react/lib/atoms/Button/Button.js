import { jsx } from 'react/jsx-runtime';

const Button = ({ label, className }) => {
    return jsx("button", Object.assign({ className: className }, { children: label }));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
