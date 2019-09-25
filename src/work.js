/** @jsx jsx */
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';

const theme = css`
	width: 100vw;
	height: 100vh;
`;

const Thing = () => {
	const ref = useRef();

	useFrame(({ clock }) => {
		ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3;
		ref.current.position.y += Math.sin(clock.getElapsedTime()) * 3;
		ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3;
		ref.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={ref}>
			<sphereGeometry attach='geometry' args={[300, 30, 30]} />
			<meshStandardMaterial attach='material' color='#FF0000' />
		</mesh>
	);
};

export const Work = () => (
	<div css={theme}>
		<Canvas camera={{ position: [0, 0, 1000] }}>
			<pointLight
				color='#FFFFFF'
				intensity={1}
				position={[0, 2000, 1000]}
			/>
			<Thing />
		</Canvas>
	</div>
);
