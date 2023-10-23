import React from 'react';

import { CardStyle, CardContentListStyle, CardActionAreaStyle, CardContentStyle } from './styles';

export const Card = ({ children, style }) => <div tabIndex={0} style={{ ...Object.assign({}, CardStyle, style)}}>{children}</div>;
export const CardActionArea = ({ children, style }) => <ul style={{ ...Object.assign({}, CardActionAreaStyle, style)}}>{children}</ul>;
export const CardContent = ({ children, style }) => <li tabIndex={0} style={{ ...Object.assign({}, CardContentStyle, style) }}>{children}</li>;
export const CardListStyled = ({ children, style }) => <li tabIndex={0} style={{ ...Object.assign({}, CardContentListStyle, style) }}>{children}</li>;