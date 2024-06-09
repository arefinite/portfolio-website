import { Code2 } from 'lucide-react'
import { ModeToggle } from '../toogle-mode'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-32'>
      <section className='flex justify-between h-full items-center'>
        <div className='flex items-center gap-2 text-2xl'>
          <span>
            <Code2 />
          </span>
          <h1>Adnan Arefin</h1>
        </div>

        <div className='flex gap-4 items-center'>
          <nav>
            <ul className='flex space-x-8'>
             <Link href="/"> <li>Home</li></Link>
              <a href='#discover'>
                <li>Discover</li>
              </a>
              <a href='#skills'>
                <li>Skills & Experiences</li>
              </a>
              <a href='#projects'>
                <li>Projects</li>
              </a>
              <a href='#achievement'>
                <li>Achievement</li>
              </a>
              <a href='#contact'>
                <li>Contact Me</li>
              </a>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </section>
    </header>
  )
}
export default Header
