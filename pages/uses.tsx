import GlitchText from "@/components/GlitchText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Uses() {
	const data = [
		{
			title: 'Hardware',
			items: [
				{
					text: "MacBook Pro 14\"",
					subtext: 'M1 Pro processor with 16GB RAM',
					icon: 'laptop_mac'
				},
				{
					text: "Dell UltraSharp U2720Q",
					subtext: '27 Inch 4K UHD',
					icon: 'nest_display'
				},
				{
					text: "Zebronics Zeb-MAX",
					subtext: 'Full size Mechanical keyboard - 104 keys',
					icon: 'keyboard'
				},
				{
					text: "Logitect G402",
					subtext: 'Wired, 4000 DPI, 8 buttons',
					icon: 'mouse'
				},
				{
					text: "Sony WH-1000XM4 aka XM4",
					subtext: 'Best noise cancelling headphones',
					icon: 'headphones'
				},
				{
					text: "OnePlus 7",
					subtext: '6GB/128GB Android 11',
					icon: 'phone_android'
				},
			]
		},
		{
			title: 'Apps',
			items: [
				{
					text: "Alfred",
					subtext: 'Spotlight but better',
					icon: 'keyboard_command_key'
				},
				{
					text: "Tiles",
					subtext: 'Window manager for Mac',
					icon: 'grid_view'
				},
				{
					text: "Youtube Premium",
					subtext: 'Music, videos, podcasts, etc',
					icon: 'music_note'
				},
				{
					text: "Figma",
					subtext: 'Design websites/wireframes',
					icon: 'figma_logo',
					custom: true,
					height: 10,
					width: 12
				},
				{
					text: "Visual Studio Code",
					subtext: "Best code editor",
					icon: 'visual-studio-code',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "Warp",
					subtext: "iTerm2 but more customisations",
					icon: 'terminal',
				}
			]
		},
		{
			title: 'Preferred Tech Stack',
			items: [
				{
					text: "ReactJS/NextJS",
					subtext: 'Frontend framework',
					icon: 'next_logo',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "React Query",
					subtext: 'Network calls & state management',
					icon: 'react-query',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "Tailwind CSS",
					subtext: 'CSS utility framework',
					icon: 'tailwind-css',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "NodeJS",
					subtext: 'Backend, also exploring Go',
					icon: 'nodejs-icon',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "Vite/Webpack",
					subtext: 'Module bundler',
					icon: 'vite',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "Github",
					subtext: 'Version control and CI/CD via gh actions',
					icon: 'github-icon',
					custom: true,
					height: 10,
					width: 12
				},
				{
					text: "Vercel",
					subtext: "Hosting & deploying edge functions",
					icon: 'vercel',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "Cloudflare",
					subtext: "CDN | Proxy server | SSL",
					icon: 'cloudflare-icon',
					custom: true,
					height: 10,
					width: 20
				},
				{
					text: "Cloudinary/Cloudfront",
					subtext: "Static asset CDN",
					icon: 'aws-cloudfront',
					custom: true,
					height: 10,
					width: 20
				}
			]
		}
	]
	return <div>
		<div className="mb-12">
			<GlitchText text="Uses" />
		</div>
		<hr className=' border-black' />
		<div className="content my-12">
			<p>I enjoy working with various applications, tools and devices that help me improve my productivity. Below you will find my daily drivers and some tools that I use often</p>
			{data.map((item, index) => (<div key={index} className="my-10">
				<p className="title text-xl font-medium mb-5">{item.title}</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{item.items.map((el, i) => (<div key={i + ' grid-item'} className="flex flex-col">
						<div className="flex items-center">
							{!el.custom && <span className="material-symbols-outlined">
								{el.icon}
							</span>}
							{el.custom && <Image src={`/${el.icon}.svg`} width={el.width} height={10} alt={el.text} />}
							<p className="ml-3">{el.text}</p>
						</div>
						<p className="text-xs text-gray-600 ">{el.subtext}</p>
					</div>))}
				</div>
			</div>))}
			<div className="my-10">
				<p className="title text-xl font-medium mb-5">Something you could not find?</p>
				<p>Incase you have any recommendations for an app or device <span className="interactable font-medium decoration-dotted underline underline-offset-4">
					<Link href="mailto:m.akash2209@gmail.com">
						share them here.
					</Link>
				</span></p>
			</div>
		</div>
	</div>;
}

export default Uses;
