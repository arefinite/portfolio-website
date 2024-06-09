import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import ceh from '@/public/ceh.png'
import idea from '@/public/idea.png'
import ict from '@/public/ict.png'
import startup from '@/public/startup.png'
import isovix from '@/public/isovix.png'

import Image from 'next/image'


const Achievements = () => {
  return (
    <section className='mt-24 '>
      <h1 className='text-center text-2xl md:text-3xl font-bold'>
        <div id="achievement">Achievements & Certifications</div>
      </h1>

      <section className='mt-16 flex justify-center'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'
        >
          <CarouselContent>
            <CarouselItem className='md:basis-1/2 lg:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span>
                      <div>
                        <Image src={ceh} alt='CEH' />
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='md:basis-1/2 lg:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span>
                      <div>
                        <Image src={ict} alt='CEH' />
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='md:basis-1/2 lg:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span>
                      <div>
                        <Image src={idea} alt='CEH' />
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='md:basis-1/2 lg:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span>
                      <div>
                        <Image src={startup} alt='CEH' />
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='md:basis-1/2 lg:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span>
                      <div>
                        <Image src={isovix} alt='CEH' />
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className='md:basis-1/2 lg:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>1</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </section>
  )
}
export default Achievements
