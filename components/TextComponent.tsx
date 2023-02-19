import React from "react";
interface TextComponentProps {
	title: string;
	children: React.ReactNode;
	wrapperClass?: string;
}
function TextComponent({ title, children, wrapperClass = '' }: TextComponentProps) {
	return <div className="text-component flex relative  mb-10 last:mb-0 ">
		<p style={{ writingMode: "vertical-lr" }} className="h-fit font-mono rotate-180 lg:absolute cursor-vertical-text text-gray-600 dark:text-gray-400 uppercase text-xs mt-2 select-none">{title}</p>
		<div className={`ml-10 ${wrapperClass} tracking-wide`}>
			{children}
		</div>
	</div>;
}

export default TextComponent;
