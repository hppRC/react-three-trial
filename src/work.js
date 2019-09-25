/** @jsx jsx */
import * as THREE from 'three';
import * as CANNON from 'cannon';
import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import { useCannon, Provider } from './useCannon';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #272727;
`;

export const Work = () => {
	return (
		<div css={theme}>
			<Canvas camera={{ position: [0, 5, 15] }}>
				<ambientLight intensity={0.5} />
				<spotLight
					intensity={0.6}
					position={[30, 30, 50]}
					angle={0.2}
					penumbra={1}
					castShadow
				/>
				<mesh castShadow receiveShadow>
					<boxGeometry attach='geometry' args={[2, 2, 2]} />
					<meshStandardMaterial attach='material' />
				</mesh>
			</Canvas>
		</div>
	);
};
