'use client';

import Image from 'next/image';
import { CheckSquare } from 'lucide-react';

const facts = [
  {
    label: 'Cao Thang Technical College.',
    body: 'Graduated with a degree in Information Technology — built a strong foundation in software engineering fundamentals.',
  },
  {
    label: 'Specializing in React & Next.js.',
    body: '4 years building scalable enterprise apps in Banking, E-commerce, Healthcare, and Energy sectors with modern frontend architecture.',
  },
  {
    label: 'Strong ownership mindset.',
    body: 'I work independently and can deliver full end-to-end features — from project setup to production deployment.',
  },
];

export default function About() {
  return (
    <section id='about' className='py-28 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-(--text) tracking-tight'>
            Problem solver <span className='text-(--accent)'>&lt;coder&gt;</span>
          </h2>
          <p className='mt-3 text-(--text-muted) text-base'>
            Frontend Developer with over 4 years of experience.
          </p>
        </div>

        {/* Content */}
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Checklist */}
          <div className='flex-1 space-y-8 max-w-lg'>
            {facts.map((f, i) => (
              <div key={i} className='flex gap-4'>
                <CheckSquare size={20} className='mt-0.5 shrink-0 text-(--accent)' />
                <p className='text-(--text-muted) leading-relaxed text-sm'>
                  <span className='font-semibold text-(--text)'>{f.label}</span> {f.body}
                </p>
              </div>
            ))}

            {/* Divider */}
            <div className='h-px bg-(--border)' />

            <div className='flex flex-wrap gap-3'>
              <a
                href='#contact'
                className='px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 bg-(--accent)'>
                Get in touch
              </a>
              <a
                href='#projects'
                className='px-5 py-2.5 rounded-full text-sm font-semibold text-(--text) border border-(--border) hover:border-(--accent) hover:text-(--accent) transition-colors'>
                View projects
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className='relative shrink-0'>
            <div className='absolute inset-0 rounded-2xl blur-2xl opacity-20 bg-(--accent)' />
            <div className='relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-(--border) bg-(--bg-secondary)'>
              <Image
                src='/profile-image.png'
                alt='Pham Minh Tam'
                fill
                className='object-cover object-top'
                priority
              />
            </div>
            {/* Floating badge */}
            <div className='absolute -bottom-4 -left-4 bg-(--bg-card) border border-(--border) rounded-xl px-4 py-2 shadow-lg'>
              <p className='text-xs text-(--text-muted)'>Experience</p>
              <p className='text-lg font-bold text-(--accent)'>4+ years</p>
            </div>
            <div className='absolute -top-4 -right-4 bg-(--bg-card) border border-(--border) rounded-xl px-4 py-2 shadow-lg'>
              <p className='text-xs text-(--text-muted)'>Projects</p>
              <p className='text-lg font-bold text-(--accent)'>10+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
