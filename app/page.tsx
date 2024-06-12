'use client';

import Grid from '@/components/Grid';
/* import { navItems } from "@/data"; */

import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from 'react-icons/fa';
/* import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
*/

export default function Home() {
  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <FloatingNav
          navItems={[
            {
              name: 'Home',
              link: '/',
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <Grid />
        {/*   
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
