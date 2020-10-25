import classnames from 'classnames';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';

import Content from 'models/Content';

export interface IContentCardProps {
    content: Content;
}

const trans = (s) => `scale(${s})`;

const ContentCard = ({ content }: IContentCardProps) => {
    const [props, set] = useSpring(() => ({ scale: 1, config: config.default }));

    const resetOnMouseLeave = () => {
        set({ scale: 1 });
    };

    const onMouseMove = ({ clientX, clientY }) => {
        set({ scale: 1.05 });
    };

    return (
        <div className="p-2" style={{ width: 200, height: 340 }}>
            <a href="#">
                <animated.div
                    className="block bg-gray-800 w-full rounded overflow-hidden relative"
                    onMouseMove={onMouseMove}
                    onMouseLeave={resetOnMouseLeave}
                    style={{
                        transform: props.scale.to(trans),
                        height: 276,
                    }}
                >
                    <div
                        className={classnames('absolute text-xs py-1 px-2 rounded top-2 right-2', {
                            'bg-red-700': content.type === 'movie',
                            'bg-green-700': content.type === 'tv',
                        })}
                    >
                        {content.type}
                    </div>
                    <img className="object-cover w-full h-full shadow-lg" src={content.remotePoster} />
                </animated.div>
                <p className="text-white py-2">
                    {content.title}
                    {content.exist && ' ✅'}
                </p>
            </a>
        </div>
    );
};

export default ContentCard;
