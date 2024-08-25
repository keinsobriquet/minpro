import { Metadata } from 'next';
import EventCard from './_components/eventcard'
import Hero from './_components/hero'
import HomeDocumentation from './_components/documentation';

export const metadata: Metadata = {
  title: 'Lecalicus',
  description: 'Feel the Music, Live the Moment',
};

export default function Home() {
  return (
    <main>
      {/* <DynamicBackground/> */}
      <Hero/>
      <EventCard/>
      <HomeDocumentation/>
    </main>
  )
}
