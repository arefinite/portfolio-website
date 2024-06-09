import introImage from '@/public/intro.png'
import Image from 'next/image'
import { Button } from '../ui/button'
const Intro = () => {
  return (
    <section className='mt-20 flex justify-between gap-4 items-center'>
      <div className='flex-1 space-y-4'>
        <p className='text-sm tracking-wider'>
          Good Morning! Welcome to my portfolio website!
        </p>
        <h1 className='text-3xl md:text-4xl tracking-tighter'>
          Hey Folks, {`I'm`} <strong>Adnan Arefin</strong>
        </h1>
        <p className='leading-7'>
          Passionate about crafting seamless user experiences and pushing web
          development boundaries.
          {`Let's`} bring your ideas to life with cutting-edge design and
          flawless functionality 🚀
        </p>
        <div className='space-x-2 pt-4'>
          <Button asChild>
            <a href='#contact'>Get in touch</a>
          </Button>
          <Button variant='secondary'>Resume</Button>
        </div>
      </div>

      <div>
        <Image src={introImage} alt='intro' />
      </div>
    </section>
  )
}
export default Intro
