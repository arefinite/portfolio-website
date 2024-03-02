import { GitBranch, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <section className='mt-24 pb-4'>
      <div className='flex justify-between'>
        <ul className='flex space-x-6 '>
          <li className='flex gap-2 items-center'>
            <span>
              <Github size={16} />
            </span>
            GitHub
          </li>
          <li className='flex gap-2 items-center'>
            <Linkedin size={16} />
            LinkedIn
          </li>
          <li className='flex gap-2 items-center'>
            <Mail size={16} />
            E-mail
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} by Arefinite | All Rights Reserved.
        </p>
      </div>
    </section>
  )
}
export default Footer
