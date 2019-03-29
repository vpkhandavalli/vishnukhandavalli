import React from 'react';

const defaultStyles = {
    Card: {
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    CardActionArea: {
        listStyle: 'none'
    },
    CardContent: {}
}
const Card = ({ children, style }) => <div tabIndex={0} style={{ ...Object.assign({}, defaultStyles.Card, style)}}>{children}</div>;
const CardActionArea = ({ children, style }) => <ul style={{ ...Object.assign({}, defaultStyles.CardActionArea, style)}}>{children}</ul>;
const CardContent = ({ children, style }) => <li tabIndex={0} style={{ ...Object.assign({}, defaultStyles.CardContent, style)}}>{children}</li>;

export { Card, CardActionArea, CardContent };
