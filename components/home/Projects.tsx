import projectImage from '@/public/project.png'
import Image from 'next/image'
const Projects = () => {
  return (
    <div>
      {' '}
      <section className='mt-24 '>
        <h1 className='text-center text-2xl md:text-3xl font-bold'>
          <div id='projects'>Projects & Codes</div>
        </h1>
        <section className='grid grid-cols-2 gap-24 justify-between mt-16 '>
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              Shoply: Gadget Shop
            </h1>
            <div className='flex gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-700 text-white font-bold rounded-full'>
                MERN
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={projectImage} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>
                    Client Link:
                    https://github.com/arefinite/shoply/tree/main/client{' '}
                  </p>
                  <p>
                    Server Link:
                    https://github.com/arefinite/shoply/tree/main/server
                  </p>
                  <p>Live Link: https://shoply-6.onrender.com/</p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Schema-based validation for efficient and advanced from
                      handling.
                    </li>
                    <li>
                      Advanced search, sort, filter and pagination capabilities.
                    </li>
                    <li>
                      Secure user authentication using JWT and Google Sign-In
                      for robust authentication.
                    </li>
                    <li>
                      Responsive design with charts, and seamless cloud
                      integration or local storage.
                    </li>
                  </ul>
                  <p>
                    <strong>Front-end:</strong> TypeScript, React, Tailwind CSS,
                    Tanstack Query, Recharts, Firebase, React Hook Form, Zod
                  </p>
                  <p>
                    <strong>Back-end:</strong> TypeScript, Express.js, Mongoose,
                    JWT, Multer, Express Validator, Cloudinary
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* second project */}
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              WebSeta: Startup Database
            </h1>
            <div className='flex gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-700 text-white font-bold rounded-full'>
                REACT
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={projectImage} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>Client Link: https://github.com/arefinite/startup </p>
                  <p>Live Link: https://webseta.netlify.app/</p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Schema-based validation for efficient and advanced from
                      handling.
                    </li>
                    <li>
                      Advanced search, sort, filter and pagination capabilities.
                    </li>
                    <li>Quick search and versatile service</li>
                    <li>Animation and large data handling</li>
                  </ul>
                  <p>
                    <strong>Front-end:</strong> React, Tailwind, Firebase, Redux
                    toolkit, Paginate, Swiper
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              PlayNext: Explore the game Universe
            </h1>
            <div className='flex gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-900 text-white font-bold rounded-full'>
                REACT
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={projectImage} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>Client Link: </p>
                  <p>Server Link:</p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Leverages third-party APIs integration Robust search,
                      sort,
                    </li>
                    <li> filter, and functionalities Toggle theme and image</li>
                    <li> optimization</li>
                  </ul>
                  <p>
                    <strong>Front-end:</strong> TypeScript, React, Material UI,
                    Axios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
export default Projects
