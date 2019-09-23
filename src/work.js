/** @jsx jsx */
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import { PerspectiveCamera } from 'three';

const theme = css`
	width: 100vw;
	height: 100vh;
`;

const Thing = () => {
	return (
		<mesh>
			<PerspectiveCamera />
		</mesh>
	);
};

export const Work = () => (
	<div css={theme}>
		<Canvas>
			<Thing />
		</Canvas>
	</div>
);
