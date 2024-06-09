import contact from '@/public/contact.svg'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'

const Contact = () => {
  return (
    <section className='mt-24'>
      <h1 className='text-center text-2xl md:text-3xl font-bold'>
        <div id='contact'>Get In Touch</div>
      </h1>
      <section className='flex gap-24 justify-between mt-16 items-center'>
        <div className='flex-1'>
          <Image src={contact} alt='contact' className='h-72' />
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <Input type='Name' placeholder='Email' />
            <Input type='email' placeholder='Email' />
            <Textarea rows={10} placeholder='Type your message here.' />
            <Button className='w-fit'>
              <span className='flex gap-2 items-center'>
                <Send size={16} /> Send
              </span>
            </Button>
          </form>
        </div>
      </section>
    </section>
  )
}
export default Contact
