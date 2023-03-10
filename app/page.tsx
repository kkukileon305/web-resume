'use client';

import { useEffect, useRef, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import MinorTitle from '../components/titles/Minortitle';
import Subtitle from '../components/titles/Subtitle';
import Title from '../components/titles/Title';
import Line from '../components/Line';
import characters from '../lib/characters';
import WindowBtn from '../components/buttons/WindowBtn';
import projects from '../lib/projects';
import Skill from '../components/buttons/Skill';
import skills from '../lib/skills';
import Header from '../components/Header';
import useStore, { Id } from '../store/useStore';
import { AnimatePresence } from 'framer-motion';
import MenuModal from '../components/MenuModal';
import ImageList from '../components/ImageList';
import ImageModal from '../components/ImageModal';
import TopBtn from '../components/buttons/TopBtn';

export type Sections = {
  contact: boolean;
  about: boolean;
  projects: boolean;
  skills: boolean;
  education: boolean;
};

const Page = () => {
  const { menuModal, imageModal } = useStore(({ menuModal, imageModal }) => ({ menuModal, imageModal }));
  const subRefs = useRef<HTMLElement[]>([]);
  const [curMenu, setcurMenu] = useState({
    contact: false,
    about: false,
    skills: false,
    projects: false,
    education: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        setcurMenu(prev => {
          const newSubtitles = { ...prev };

          entries.forEach(entry => {
            newSubtitles[entry.target.id as Id] = entry.isIntersecting;
          });

          return newSubtitles;
        });
      },
      {
        rootMargin: '-60px',
      }
    );

    subRefs.current.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence>
        {menuModal && <MenuModal curMenu={curMenu} subRefs={subRefs} />}
        {imageModal && <ImageModal />}
      </AnimatePresence>
      <TopBtn />

      <Header curMenu={curMenu} subRefs={subRefs} />
      <main className='px-4 max-w-[1060px] mx-auto'>
        <Title
          content={
            <>
              ????????? ???????????? ?????????, <br /> ??????????????????.
            </>
          }
        />

        <section id='contact' ref={element => element && (subRefs.current[0] = element)}>
          <Subtitle content='Contact' />
          <MinorTitle content='Email' />
          <p>kkukileon305@gmail.com</p>
          <MinorTitle content='Phone' />
          <p>010 - 9092 - 1070</p>
          <div className='flex my-4'>
            <WindowBtn url='https://github.com/kkukileon305'>
              <p>GitHub</p>
              <BsGithub size={30} />
            </WindowBtn>
          </div>

          <Line />
        </section>

        <section id='about' ref={element => element && (subRefs.current[1] = element)}>
          <Subtitle content='About' />
          <div className='leading-8'>
            <p>???????????? ???????????????, ???????????? ??????????????? ?????? ????????? ??????????????? UI ????????? ????????? ???????????????.</p>
            <p>????????? ???????????? ?????? ???????????? ???????????? ?????? ???????????? ??????????????? ????????? ?????????????????????.</p>
            <p>?????? ????????? ???????????? ?????? ???????????? ???????????? ?????? ?????? ???????????? ????????? ????????? ???????????? ???????????? ?????? ????????? ?????????????????? ???????????? ???????????????.</p>
          </div>
          <MinorTitle content='?????? ?????? ???????????????.' />
          <ul className='list-disc pl-6'>
            {characters.map(char => (
              <li className='my-2' key={char.id}>
                {char.content}
              </li>
            ))}
          </ul>
          <Line />
        </section>

        <section id='skills' ref={element => element && (subRefs.current[2] = element)}>
          <Subtitle content='Skills' />
          <ul className='flex gap-2 flex-wrap py-4'>
            {skills.map(skill => (
              <li key={skill}>
                <Skill skill={skill} />
              </li>
            ))}
          </ul>
          <Line />
        </section>

        <section id='projects' ref={element => element && (subRefs.current[3] = element)}>
          <Subtitle content='Experience & Project' />
          <ul>
            {projects.map((project, index) => (
              <li key={project.title} className='flex flex-col md:flex-row py-4'>
                <div className='w-full md:w-1/5 pr-4'>
                  <div className='sticky top-[68px]'>
                    <MinorTitle content={project.title} />
                    <p>{project.duration}</p>
                    <p>{project.type} ????????????</p>
                  </div>
                </div>
                <div className='w-full md:w-4/5 py-4'>
                  <ImageList imageList={project.imageList} />
                  <MinorTitle content='Introduce' />
                  <p className='mb-4'>{project.intruduce}</p>
                  <MinorTitle content='Deploy' />
                  <WindowBtn url={project.deploy}>????????????</WindowBtn>
                  <MinorTitle content='GitHub' />
                  <WindowBtn url={project.github}>????????????</WindowBtn>
                  <MinorTitle content='Skills' />
                  <ul className='flex gap-2 flex-wrap my-2'>
                    {project.skills.map(skill => (
                      <li key={skill}>
                        <Skill skill={skill} />
                      </li>
                    ))}
                  </ul>

                  <MinorTitle content='Description' />
                  <ul className='list-disc pl-6'>
                    {project.description.map(desc => (
                      <li className='py-2' key={desc}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <Line />
        </section>

        <section id='education' ref={element => element && (subRefs.current[4] = element)}>
          <Subtitle content='Education' />
          <ul className='list-disc pl-6'>
            <li>2016.02 - 2023.08 ??????????????? ???????????? ????????????</li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default Page;
