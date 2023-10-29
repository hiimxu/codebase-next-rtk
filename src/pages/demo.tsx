import React, { FC } from 'react';

type Props = {
    content?: string;
};

const Demo: FC<Props> = ({ content }) => {
    return <div>{content}</div>;
};

Demo.defaultProps = {
    content: 'hello',
};
export default Demo;
