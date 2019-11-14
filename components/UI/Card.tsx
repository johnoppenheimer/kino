import { KFC } from '@types';
import React from 'react';

const Card: KFC = ({ children, className }) => (
    <div className={`block bg-gray-800 shadow-lg rounded p-6 ${className}`}>{children}</div>
);

export default Card;
