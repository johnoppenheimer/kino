import classnames from 'classnames';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDispatch } from 'react-redux';

import Content from 'models/Content';
import { selectContent } from 'store/content/actions';

export interface IContentCardProps {
    content: Content;
}

const trans = (s) => `scale(${s})`;

const ContentCard = ({ content }: IContentCardProps) => {
    const [props, set] = useSpring(() => ({ scale: 1, config: config.default }));
    const dispatch = useDispatch();

    const resetOnMouseLeave = () => {
        set({ scale: 1 });
    };

    const onMouseMove = ({ clientX, clientY }) => {
        set({ scale: 1.05 });
    };

    const onSelectContent = () => {
        dispatch(selectContent(content));
    };

    return (
        <div className="p-2" style={{ width: 200, height: 340 }}>
            <button onClick={onSelectContent}>
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
                    <img className="object-cover h-full shadow-lg" src={content.remotePoster} />
                </animated.div>
                <p className="text-white py-2">
                    {content.title}
                    {content.exist && ' ✅'}
                </p>
            </button>
        </div>
    );
};

export default ContentCard;
