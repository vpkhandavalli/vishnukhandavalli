import React from 'react';

const defaultStyles = {
    Card: {
        marginBottom: '1.5rem',
        fontSize: 'inherit',
        boxShadow: '3px -1px 6px 3px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    CardActionArea: {
        listStyle: 'none'
    },
    CardContent: {
        padding: '.2rem 0.5rem',
    }
}
const Card = ({ children, style }) => <div style={Object.assign({}, defaultStyles.Card, style)}>{children}</div>;
const CardActionArea = ({ children, style }) => <ul style={Object.assign({}, defaultStyles.CardActionArea, style)}>{children}</ul>;
const CardContent = ({ children, style }) => <li style={Object.assign({}, defaultStyles.CardContent, style)}>{children}</li>;

export { Card, CardActionArea, CardContent };
