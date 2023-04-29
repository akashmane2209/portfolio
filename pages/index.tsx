import Head from 'next/head'
import { useEffect, useState } from 'react'
import TextComponent from '@/components/TextComponent'
import GlitchText from '@/components/GlitchText'

export default function Home() {

  const START_DATE = new Date('11-01-2019')
  const today = new Date()
  const [experience, setExperience] = useState<number[]>([])

  const calculateExperience = () => {
    const startMonth = START_DATE.getFullYear() * 12 + START_DATE.getMonth();
    const endMonth = today.getFullYear() * 12 + today.getMonth();
    const monthInterval = (endMonth - startMonth);
    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;
    setExperience([yearsOfExperience, monthsOfExperience]);
  }

  useEffect(() => {
    calculateExperience();
  }, []);

  const TITLE_TEXT = "front-end developer, ui designer, binge watcher"

  return (
    <>
      <Head>
        <title>Akash Mane</title>
        <meta name="description" content="Akash Mane" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="brief-introduction flex mb-12">
        <h1 className='flex flex-col'>
          {TITLE_TEXT.split(',').map(t => <GlitchText key={t} text={t} />)}
        </h1>
      </div>
      <hr className=' border-black' />
      <div className="text-content my-12">
        <TextComponent title='intro' >
          <p className='text-gray-700 text-lg'>
            My name is Akash, I currently live in bangalore, India 🇮🇳 and work as a frontend engineer at <a className='interactable font-medium underline' href='https://razorpay.com' target='_blank' rel="noreferrer">Razorpay</a>, a fintech startup that provides thousands of customer payment solutions to accept, process, and disburse payments, provide credit lines, corporate credit cards and much more. I have a professional experience of {experience[0]}.{experience[1]} years and i enjoy working on solving complex problems!
          </p>
        </TextComponent>
        <TextComponent title='experience' >
          <div className="experience">
            <div className="title mb-5 flex items-center justify-between">
              <h3 className='font-semibold text-lg '>Frontend Engineer at Razorpay</h3>
              <p className="duration italic text-md text-gray-600">
                March 2022 - Present
              </p>
            </div>
            <p className='text-gray-700 text-sm'>
              Worked with observability team to contribute to open source project - Hypertrace. Added custom dashboards feature to the platform and took full ownership of the same. Conducted <span className='uppercase'>FGDs</span>, created tech spec, figma designs and delivered the feature before deadline. Currently used by Razorpay devs to monitor merchants dashboards during high load durations such as sales, cricket matches, etc </p>
            <p className='mt-3 text-gray-700 text-sm'>
              Currently working with corporate cards team to help onboard new customers by simplifying the onboarding flow.
            </p>
          </div>
          <div className="experience mt-10">
            <div className="title mb-5 flex items-center justify-between">
              <h3 className='font-semibold text-lg '>Software Development Engineer at Fynd</h3>
              <p className="duration italic text-md text-gray-600">
                November 2019 - March 2022
              </p>
            </div>
            <p className='whitespace-pre-line text-gray-700 text-sm'>
              Worked on building a fully fledged e-commerce platform to help offline merchants setup their online store in few clicks.
              Developed a CLI tool to help indie developers created themes and extensions for the platform
              Build a realtime theme editor to allow users to customise the look and feel of their website
              Among the first 25 engineers of Fynd and build products from the start
            </p>
          </div>
        </TextComponent>
        <TextComponent title='tech' >
          <p className='text-gray-700 text-lg'>
            I enjoy working mainly with Javascript and i am in love with it. I have majorly worked in the frontend and have professional experience working React, Vue and Angular, however in my free time i have spent time exploring svelte and solid recently.
            I also have used NodeJS for building APIs in my past experience along side docker, kubernetes and kafka. Though I have experience working as a full stack engineer i prefer frontend over backend.
          </p>
        </TextComponent>
        <TextComponent title='interests' >
          <div className='text-gray-700 text-lg'>
            In my free time you will probably find me watching some random youtube video. However i do enjoy reading a few books, listen to podcasts. I recently came across this concept of stoicism and have been exploring about it. I do go to the gym once in a while. I also watch anime sometimes along side F1. <br />
            <div className='mt-3'>
              <p className='text-sm font-medium'>Favourites</p>
              <div className="flex flex-wrap text-xs  mt-3">
                <p className="mr-4"><span className="font-medium">Sport</span>: Formula 1</p>
                <p className="mr-4"><span className="font-medium">Book</span>: Shiva Trilogy by Amish Tripathi</p>
                <p className="mr-4"><span className="font-medium">Movie</span>: The Dark Knight Trilogy</p>
                <p className="mr-4"><span className="font-medium">Series</span>: Silicon Valley</p>
                <p><span className="font-medium">Anime</span>: Naruto</p>
              </div>
            </div>
          </div>
        </TextComponent>
        <TextComponent title='socials' >
          <p className='text-gray-700 text-lg whitespace-pre'>
            Connect with me on <a className='interactable font-medium decoration-dotted underline underline-offset-4' href='https://twitter.com/undercovrnoob' target='_blank' rel="noreferrer">Twitter</a><span>, </span>
            <a className='interactable font-medium decoration-dotted underline underline-offset-4' href='https://www.linkedin.com/in/akash-anand-mane/' target='_blank' rel="noreferrer">LinkedIn</a><span> and </span>
            <a className='interactable font-medium decoration-dotted underline underline-offset-4' href='https://github.com/akashmane2209' target='_blank' rel="noreferrer">Github</a>
          </p>
        </TextComponent>
      </div>
    </>
  )
}
