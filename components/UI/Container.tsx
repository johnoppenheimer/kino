import React from 'react';

interface IContainerProps {
    className?: string;
}

/**
 * `Container` is the main background container that hold the background color
 */
const Container: React.FunctionComponent<IContainerProps> = ({ children, className }) => (
    <div className={`bg-gray-900 ${className}`}>{children}</div>
);

export default Container;
