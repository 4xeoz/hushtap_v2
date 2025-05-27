import React from 'react'
import Section_1 from '@/components/sections/Home/section_1'
import Section_2 from '@/components/sections/Home/section_2';
import Section_3 from '@/components/sections/Home/section_3';
import Section_4 from '@/components/sections/Home/section_4';
import Section_5 from '@/components/sections/Home/section_5';

const HomePage = () => {
  return (
   <section className="min-h-screen bg-black text-white">
    <Section_1/>
    <Section_2/>
    <Section_3/>
    <Section_4/>
    <Section_5/>
   </section>
  )
}

export default HomePage