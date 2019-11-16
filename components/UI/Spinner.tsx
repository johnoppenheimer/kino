import { KFC } from '@types';
import React from 'react';

interface ISpinnerProps {
    color: string;
}

const Spinner: KFC<ISpinnerProps> & { defaultProps: Partial<ISpinnerProps> } = ({ color, className }) => (
    <svg className={`spinner-circle ${className}`} viewBox="0 0 50 50" data-author="supahfunk">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" style={{ stroke: color }} />
    </svg>
);

Spinner.defaultProps = {
    color: 'white',
};

export default Spinner;
