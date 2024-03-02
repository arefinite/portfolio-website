import { Code2 } from 'lucide-react'
import { ModeToggle } from '../toogle-mode'

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
              <li>Home</li>
              <li>Discover</li>
              <li>Skills & Experiences</li>
              <li>Projects</li>
              <li>Achievement</li>
              <li>Contact Me</li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </section>
    </header>
  )
}
export default Header
