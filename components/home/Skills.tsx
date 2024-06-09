import Image from 'next/image'
import { icons } from '../constants'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '../ui/card'
import { CheckCircle } from 'lucide-react'

const Skills = () => {
  return (
    <section className='mt-24 '>
      <h1 className='text-center text-2xl md:text-3xl font-bold'>
        <div id='skills'>Skills & Experiences</div>
      </h1>
      <section className='flex justify-between gap-24 mt-16'>
        <div className='flex-1'>
          <div className='grid grid-cols-5 gap-8'>
            {icons.length > 0 &&
              icons.map((icon, i) => (
                <div key={i} className='flex flex-col items-center gap-2'>
                  <div className='h-16 w-16 rounded-full bg-slate-100 flex justify-center items-center'>
                    <Image
                      src={icon.url}
                      alt={icon.name}
                      className='h-12 w-12 p-1 object-cover'
                    />
                  </div>
                  <p className='text-center text-sm'>{icon.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className='flex-1'>
          <Card className='p-4'>
            <Tabs defaultValue='faceOfArt' className='w-full'>
              <TabsList>
                <TabsTrigger value='faceOfArt'>
                  Job At Face of Art Technologies
                </TabsTrigger>
                <TabsTrigger value='webseta'>Job At WebSeta</TabsTrigger>
                <TabsTrigger value='isovix'>
                  Job At iSovix Technology
                </TabsTrigger>
              </TabsList>
              <TabsContent value='faceOfArt' className='leading-8'>
                <p>
                  <strong>Position:</strong> Junior Full-Stack Developer{' '}
                </p>
                <p>
                  <strong>Timeline:</strong> January 2023 - February 2024
                </p>
                <p>
                  <strong>Job Achievements:</strong>
                </p>
                <ul>
                  <li className='flex gap-2 '>
                    <span>
                      <CheckCircle color='green' />
                    </span>
                    <p>
                      Spearheaded the development of a client-facing web
                      application using the MERN stack, facilitating seamless
                      communication between front-end and back-end components.
                    </p>
                  </li>

                  <li className='flex gap-2'>
                    <span>
                      <CheckCircle color='green' />
                    </span>
                    <p>
                      Implemented advanced form handling techniques and
                      schema-based validation to enhance data integrity and user
                      experience, resulting in a 30% reduction in form
                      submission errors.
                    </p>
                  </li>
                  <li className='flex gap-2 '>
                    <span>
                      <CheckCircle color='green' />
                    </span>
                    <p>
                      Led the integration of third-party APIs, including payment
                      gateways and social media authentication, to extend the
                      {`application's`} functionality and improve user
                      engagement.
                    </p>
                  </li>
                  <li className='flex gap-2 '>
                    <span>
                      <CheckCircle color='green' />
                    </span>
                    <p>
                      Optimized application performance through database
                      indexing, query optimization, and server-side caching,
                      resulting in a 40% decrease in page load times and
                      improved overall user satisfaction.
                    </p>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value='webseta'>
                Change your password here.
              </TabsContent>
              <TabsContent value='isovix'>
                Change your password here.
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>
    </section>
  )
}
export default Skills
