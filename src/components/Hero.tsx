'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const techTags = ['JavaScript', 'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux'];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20'>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full opacity-10 blur-3xl pointer-events-none bg-(--accent)' />

      <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
        <p className='text-sm text-(--text-muted) mb-6 font-mono tracking-wide'>
          {'{ '}
          {techTags.map((t, i) => (
            <span key={t}>
              <span className='text-(--accent)'>{t}</span>
              {i < techTags.length - 1 && <span className='text-(--text-muted)'>, </span>}
            </span>
          ))}
          {' }'}
        </p>

        <h1
          ref={titleRef}
          className='text-5xl sm:text-7xl font-extrabold tracking-tight text-(--text) leading-none mb-6'>
          Frontend
          <br />
          Developer
        </h1>

        <p className='text-base sm:text-lg text-(--text-muted) max-w-xl mx-auto mb-10 leading-relaxed'>
          Specializing in <span className='text-(--text) font-medium'>React & Next.js</span>, I
          build scalable, performant web applications with clean architecture and great user
          experience.
        </p>

        <div className='flex flex-wrap items-center justify-center gap-4'>
          <a
            href='#projects'
            className='px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 bg-(--accent)'>
            See my work
          </a>
          <a
            href='/Pham_Minh_Tam_CV.pdf'
            download
            className='px-7 py-3 rounded-full text-sm font-semibold text-(--text) border border-(--border) hover:border-(--accent) hover:text-(--accent) transition-all duration-200'>
            Download CV
          </a>
        </div>
      </div>

      <div className='relative z-10 mt-16 w-full max-w-lg mx-auto px-6'>
        <KeyboardIllustration />
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-(--text-muted)'>
        <span className='text-xs tracking-widest uppercase'>scroll</span>
        <span className='w-px h-8 bg-(--border) block' />
      </div>
    </section>
  );
}

function KeyboardIllustration() {
  return (
    <div className='flex gap-8 items-end justify-center'>
      <Image
        src='/keyboard.png'
        alt='Keyboard'
        width={320}
        height={120}
        className='object-contain'
      />
      <Image src='/mouse.png' alt='Mouse' width={60} height={100} className='object-contain' />
    </div>
  );
}
