import Image from 'next/image'

// Components
import NavBar from './components/NavBar'
import Layout from './components/Principal'

// Images
import profile from '../public/rogy.png';
import AnimatedText from './components/AnimatedText';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-light w-full min-h-screen font-texts'>
      <NavBar />
      <Layout className='lg:pt-0 pt-[60px]'>
        <div className='lg:flex lg:items-center lg:justify-between w-full h-full pb-3'>
          <div className='lg:w-1/2 pb-3 flex flex-col items-center self-center'>            
            <AnimatedText text='Frontend Developer' className={'font-titles lg:!text-[110px] text-[48px] pb-1 lg:pb-5 lg:!text-right'}/>
            <p className='my-4 font-texts text-sm text-center lg:text-2xl lg:text-center'>
            Desarrolladora web Frontend autodidacta, apasionada por la tecnología y el aprendizaje. Actualmente, emergiendo en el mundo del desarrollo en busca de retos que me permitan crecer y ampliar mis conocimientos.
            </p>
            <div className='flex items-center self-center mt-3 lg:mt-5'>
            <Link className='flex items-center bg-violeta text-gris p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-gris hover:text-light '
            href='mailto:cdesousarogymar@gmail.com'>Work with me</Link>
          </div>
          </div>
          <div className='lg:w-1/2'>
            <Image src={profile} alt='rogy-Pick' className='w-full h-auto' />
          </div>
        </div>
      </Layout>
    </main>
  )
}
