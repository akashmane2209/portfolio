import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';




const overscrollOptions = {
	enable: true,
	effect: 'bounce',
	damping: 0.15,
	maxOverscroll: 150,
	glowColor: '#fff',
};



const options = {
	damping: 0.07,
	thumbMinSize: 0,
	plugins: {
		overscroll: { ...overscrollOptions },
	},

}

const Scroll = () => {
	useEffect(() => {
		import("smooth-scrollbar/plugins/overscroll").then((module) => {
			Scrollbar.use(module.default);
			Scrollbar.init(document.body, options);
		})





		return () => {
			if (Scrollbar) Scrollbar.destroy(document.body)
		}
	}, [])



	return null;
}

export default Scroll;