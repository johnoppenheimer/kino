import { KFC } from '@types';
import React from 'react';

/**
 * `Container` is the main background container that hold the background color
 */
const Container: KFC = ({ children, className }) => (
    <div className={`text-white bg-gray-900 min-h-screen ${className}`}>{children}</div>
);

export default Container;
