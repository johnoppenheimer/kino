import React from 'react';

import Spinner from 'components/UI/Spinner';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface IButtonProps extends HTMLButtonProps {
    /** Setting this to true will make a Spinner appear */
    loading: boolean;

    /** Color name from Tailwind, hover color will be deduced from it */
    color: string;
}

/**
 * The `Button` support all properties of the tag `button`.
 * It also support loading, and get its color from Tailwind config
 */
const Button: React.FunctionComponent<IButtonProps> & { defaultProps: Partial<IButtonProps> } = ({
    loading,
    color,
    ...props
}) => {
    /**
     * We deconstruct the props that are not needed by the `button` element,
     * otherwise error will be raised on the console if we give not needed props
     * (even though it will work)
     */

    const defaultColor = `bg-${color}-600`;
    const hoverColor = `bg-${color}-700`;

    return (
        <button
            className={`${defaultColor} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            {...props}
        >
            <div className="flex items-center">
                {loading && <Spinner className="mr-2" />}
                {props.children}
            </div>
        </button>
    );
};

Button.defaultProps = {
    loading: false,
    type: 'button',
};

export default Button;
