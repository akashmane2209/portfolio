import React, { useEffect, useRef } from "react";

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const GlitchText = ({ text }: { text: string }) => {
	const ref = useRef<HTMLParagraphElement>(null)
	const glitchText = () => {
		let iterations = 0;
		const interval = setInterval(() => {
			if (ref?.current) {
				ref.current.innerText = text.split("").map((_l, index) => {
					if (index < iterations) return text[index]
					return LETTERS[Math.floor(Math.random() * 26)]
				}).join("");
				if (iterations >= text.length) clearInterval(interval);
				iterations += 1 / 3;
			}
		}, 30)

	};
	useEffect(() => {
		setTimeout(() => {
			glitchText();
		}, 3800)

	}, []);

	return (
		<p ref={ref} onMouseOver={glitchText} className='text-6xl font-semibold uppercase inline-block'>{`${text} `}</p>
	)
}

export default GlitchText;