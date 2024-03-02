import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const About = () => {
  return (
    <section className='mt-24 '>
      <h1 className='text-center text-2xl md:text-3xl font-bold'>
        Discover Arefin
      </h1>
      <section className='flex gap-24 justify-between mt-16'>
        <div className='flex-1'>
          <h1 className='text-xl md:text-2xl font-bold'>About Me</h1>
          <div className='flex gap-4 mt-4'>
            <span className='w-12 p-8 flex justify-center items-center h-12 bg-green-600 text-white font-bold rounded-full'>
              Who
            </span>
            <div className='leading-7 tracking-tight'>
              <p>
                As a dynamic 🌟 Full-Stack Developer, I thrive on tackling
                challenges with inventive solutions. With a few years under my
                belt in this ever-evolving industry, {`I've`} sharpened my
                analytical prowess and collaborative spirit. My journey includes
                serving as the MERN Developer for impactful project at WebSeta,
                where I honed my skills in crafting seamless digital
                experiences.
              </p>
              <p className='mt-4'>
                Prior to that, I worked as a Junior Full-Stack Developer at Face
                of Art Technologies, where I delved deep into CRM system
                development. I also obtained Certified Ethical Hacker (CEH)
                certificate from EC-Council.
              </p>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='text-xl md:text-2xl font-bold'>Why Me?</h1>
          <div className='flex gap-4 mt-4'>
            <span className='w-12 p-8 flex justify-center items-center h-12 bg-green-600 text-white font-bold rounded-full'>
              Why
            </span>
            <div className='leading-7 w-full'>
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Innovative Problem-Solver</AccordionTrigger>
                  <AccordionContent>
                    I thrive on finding creative solutions to everyday
                    challenges, bringing fresh perspectives to every project.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Collaborative Spirit</AccordionTrigger>
                  <AccordionContent>
                    With a passion for teamwork, I excel in collaborative
                    environments,
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Proven Track Record</AccordionTrigger>
                  <AccordionContent>
                    Having served as the MERN Developer at WebSeta and Face of
                    Art Technologies Ltd, I bring a track record of success and
                    tangible results to the table.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-4'>
                  <AccordionTrigger>Leadership Potential </AccordionTrigger>
                  <AccordionContent>
                    Prepared by my previous experiences, {`I'm`} poised to take
                    on leadership roles in web application development teams,
                    driving success and innovation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-5'>
                  <AccordionTrigger>
                    Dedication to Growth and Continuous Learning
                  </AccordionTrigger>
                  <AccordionContent>
                    {`I'm`} committed to continuous learning and improvement,
                    staying abreast of the latest trends and technologies to
                    deliver cutting-edge solutions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
export default About
