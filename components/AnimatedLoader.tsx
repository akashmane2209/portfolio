import Image from "next/image";
import React, { useEffect, useRef } from "react";

function AnimatedLoader() {
	const overlayM = useRef<HTMLDivElement>(null);
	const ASvg = useRef<HTMLImageElement>(null);
	const loaderParent = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (overlayM && overlayM.current && ASvg && ASvg.current && loaderParent && loaderParent.current) {
			overlayM.current.animate([
				{ transform: 'translateX(-100px)' },
				{ transform: 'translateX(200px)' }
			], {
				duration: 1500,
				easing: 'ease-in-out',
				// iterations: Infinity,
				delay: 0,
				fill: 'forwards'
			})
			ASvg.current.animate([{ opacity: 0 }, {
				opacity: 1
			}], {
				duration: 1000,
				easing: 'ease-in-out',
				delay: 1300,
				fill: 'forwards'
			})
			loaderParent.current.animate([
				{ transform: 'translateY(0)' },
				{ transform: 'translateY(-100%)' }],
				{
					duration: 1000,
					easing: 'ease-in-out',
					delay: 3000,
					fill: 'forwards'
				})
		}
	}, []);

	return <div ref={loaderParent} className=" z-10 loader absolute top-0 left-0 w-screen h-screen bg-sky-300">
		<div className="loader-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<Image
				src="/M.svg"
				height={200}
				width={200}
				alt="M"
				priority
			/>
			<div ref={overlayM} className="overlay-for-m h-[200px] w-[300px] bg-sky-300 absolute top-0 left-0"></div>
			<Image
				ref={ASvg}
				src="/A.svg"
				height={150}
				width={150}
				alt="A"
				priority
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
			/>
		</div>

	</div>;
}

export default AnimatedLoader;
