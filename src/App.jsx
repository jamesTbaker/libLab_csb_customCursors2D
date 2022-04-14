import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AppScaffold } from './AppScaffold';
import { Button } from '@jbkr/components';
import { color } from '@jbkr/style-service';

const Container = styled.div`
	cursor: none;
	padding: 10rem;
	button {
		cursor: none;
	}
`;
const CursorOuterElement = styled.div`
	position: fixed;
	left: -2rem;
	top: -2rem;
	width: 4rem;
	height: 4rem;
	border: 0.25rem solid
		${color({
			kind: 'Accent',
			tone: 'Iris',
			level: 2,
			format: 'string',
		})};
	border-radius: 50%;
	pointer-events: none;
	transition: all 100ms;
`;
const CursorInnerElement = styled.div`
	position: fixed;
	left: -0.25rem;
	top: -0.25rem;
	width: 0.5rem;
	height: 0.5rem;
	background: ${color({
		kind: 'Accent',
		tone: 'Iris',
		level: 1,
		format: 'string',
	})};
	border-radius: 50%;
	pointer-events: none;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 5rem;
`;
const buttonTypes = ['snowflake', 'package', 'link', 'email'];
const buttonClickHandler = () => {};
export const App = () => {
	const cursorOuterElementRef = useRef();
	const cursorInnerElementRef = useRef();
	useEffect(() => {
		// the cutom cursor's inner and outer element DOM nodes
		const outerElementDOMNode = cursorOuterElementRef.current;
		const innerElementDOMNode = cursorInnerElementRef.current;
		// user's pointing location in pixels from top left of screen;
		//		default to offscreen
		let pointerLocationX = -100;
		let pointerLocationY = -100;
		// location of outer element when it's stuck; default to
		// 		0; will be changed before it's used
		let stuckLocationX = 0;
		let stuckLocationY = 0;
		// array of query selectors for the DOM elements that
		// 		will be "magnetic"
		const magneticNodeSelectors = ['button'];
		// boolean tracking the stuckness of the outer element
		let outerElementIsStuck = false;
		// define function to initialize the inner element
		const initializeInnerElement = () => {
			// listen for the mousemove event and update our record of
			//		where the user is pointing
			document.addEventListener('mousemove', (event) => {
				pointerLocationX = event.clientX;
				pointerLocationY = event.clientY;
			});
			// define function that moves the innerElementDOMNode from
			// 		its default position to where the user is pointing,
			// 		and call the function recursively
			const positionInnerElement = () => {
				// set the DOM node's transform style
				innerElementDOMNode.style.cssText = `transform: translate(${pointerLocationX}px, ${pointerLocationY}px);`;
				// call self when an animation frame is available
				requestAnimationFrame(positionInnerElement);
			};
			// call the positionInnerElement function when an animation frame is available
			requestAnimationFrame(positionInnerElement);
		};
		// define function to initialize the outer element
		const initializeOuterElement = () => {
			// listen for the mousemove event and update our record of
			//		where the user is pointing
			document.addEventListener('mousemove', (event) => {
				pointerLocationX = event.clientX;
				pointerLocationY = event.clientY;
			});
			// define function that moves the innerElementDOMNode from
			// 		its default position to where the user is pointing,
			// 		and call the function recursively
			const positionOuterElement = () => {
				// if outer element is not stuck
				if (!outerElementIsStuck) {
					// set the DOM node's style to the pointer location
					outerElementDOMNode.style.cssText = `transform: translate(${pointerLocationX}px, ${pointerLocationY}px); border-width: 0.25rem;`;
					// if outer element is stuck
				} else if (outerElementIsStuck) {
					// set the DOM node's style to the stuck location
					outerElementDOMNode.style.cssText = `transform: translate(${stuckLocationX}px, ${stuckLocationY}px) scale(2.2, 2.2); border-width: 0.125rem;`;
				}
				// call self when an animation frame is available
				requestAnimationFrame(positionOuterElement);
			};
			// call the positionOuterElement function when an animation frame is available
			requestAnimationFrame(positionOuterElement);
		};
		// define function to specify what happens when
		// 		the pointing device enters a magnetic element
		const handleEnteringMagneticElement = (event) => {
			// get this element's size and position info
			const magneticElementBox = event.currentTarget.getBoundingClientRect();
			// set the stuck location's x-coordinate to this element's
			// 		left position and half of its width (the
			// 		element's horizontal center)
			stuckLocationX = Math.round(
				magneticElementBox.left + magneticElementBox.width / 2
			);
			// set the stuck location's y-coordinate to this element's
			// 		top position and half of its height (the
			// 		element's vertical center)
			stuckLocationY = Math.round(
				magneticElementBox.top + magneticElementBox.height / 2
			);
			// set flag indicating that the outer element is stuck
			outerElementIsStuck = true;
		};
		// define function to specify what happens when
		// 		the pointing device leaves a magnetic element
		const handleLeavingMagneticElement = () => {
			// set flag indicating that the outer element is not stuck
			outerElementIsStuck = false;
		};
		// define function to magnetize a single given element
		const magnetizeElement = (node) => {
			// add to the given element the specified event
			// 		listeners and handlers
			node.addEventListener('mouseenter', handleEnteringMagneticElement);
			node.addEventListener('mouseleave', handleLeavingMagneticElement);
		};
		// define function to magnetize all elements in
		// 		the magneticNodeSelectors array
		const magnetizeAllMagneticElements = () => {
			// for each node selector in magneticNodeSelectors
			magneticNodeSelectors.forEach((nodeSelector) => {
				// for each node in the set of all nodes matching
				// 		the given node selector
				document.querySelectorAll(nodeSelector).forEach((node) => {
					// call the magnetizeElement function on the node
					magnetizeElement(node);
				});
			});
		};
		// initialize the custom cursor's movement by calling the
		// 		initialization functions we've defined
		initializeInnerElement();
		initializeOuterElement();
		// magnetize all of the magnetic elements
		magnetizeAllMagneticElements();
	}, []);
	return (
		<AppScaffold title="Custom Cursors, Part 2, C">
			<Container>
				<CursorInnerElement
					ref={cursorInnerElementRef}
				></CursorInnerElement>
				<CursorOuterElement
					ref={cursorOuterElementRef}
				></CursorOuterElement>
				<ButtonContainer>
					{buttonTypes.map((buttonType) => (
						<Button
							text={buttonType}
							iconBefore={buttonType}
							surfaceStyle="outlined"
							clickHandler={buttonClickHandler}
							textHidden
						/>
					))}
				</ButtonContainer>
				<p>
					Munta fork out ey up duck could murder a pint and thus loo
					half-inch it, hard cheese old boy a right toff pot noodle
					gutted come hither on the beat ponce bossy britches narky,
					ever so easy peasy bit of alright crumpets on his bill bread
					and butter pudding what a load of guff. Bits 'n bobs
					Shakespeare yorkshire mixture on his tod treacle beefeater,
					bloody shambles brown sauce bog off gobsmacked. Squirrel
					stiff upper lip a right royal knees up gosh down the local
					upper class ey up, bloke fork out hadn't done it in donkey's
					years Prince Charles gosh a right toff, queer as a clockwork
					orange the fuzz know your onions pompous getting on my wick.
				</p>
			</Container>
		</AppScaffold>
	);
};
