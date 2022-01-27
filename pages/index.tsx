import React, { useEffect } from 'react'
import Image from 'next/image'
import Particle from '../Components/Particles'
export default function index() {
  useEffect(() => {
    const mobileNavButton = document.getElementById('mobile-nav-button')
    const mobileNav = document.getElementById('mobile-nav')
    const cross = document.getElementById('cross')
    mobileNavButton!.onclick = () => {
      mobileNav!.classList.toggle('hidden')
      mobileNavButton!.classList.toggle('hidden')
    }
    cross!.onclick = () => {
      mobileNav!.classList.toggle('hidden')
      mobileNavButton!.classList.toggle('hidden')
    }
  }, [])
  return (
    <>
      <div style={{ position: 'absolute' }}>
        <Particle></Particle>
      </div>
      <body className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 font-body">
        <header className="m-2 mx-10 flex text-2xl sticky top-0 z-50 bg-purple-400 p-3">
          <div className="ml-auto md:ml-0">hemang.xyz</div>
          <nav className="ml-auto hidden space-x-5 text-xl md:flex">
            <a
              href="#edu"
              className="rounded-full border-2 border-gray-800 p-2 hover:bg-purple-300"
            >
              Education
            </a>
            <a
              href="#projects"
              className="rounded-full border-2 border-gray-800 p-2 hover:bg-purple-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-gray-800 p-2 hover:bg-purple-300"
            >
              Contact
            </a>
          </nav>
          <div className="ml-auto md:hidden">
            <button id="mobile-nav-button" className="outline-none">
              <svg
                className="h-6 w-6 text-black"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div id="mobile-nav" className="flex hidden flex-col">
              <button id="cross">x</button>
              <a href="#edu">Education</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </header>
        <main className="flex flex-col">
          <section className="m-6 self-center md:flex md:justify-between md:self-auto">
            <div className="transform text-center text-4xl transition-all hover:z-50 hover:scale-110 md:ml-10 md:self-center">
              <p>
                Hello
                <br />
                My name is <span className="font-bold">Hemang</span>
                <br />
                I'm a <span className="font-bold">Full Stack Developer</span>
              </p>
            </div>
            <div className="transform transition-all hover:z-50 hover:scale-105">
              <div className="rounded-3xl mt-4">
                <Image src={'/hackerman.jpg'} width={800} height={400} />
              </div>
            </div>
          </section>

          <section
            id="tech"
            className="m-5 rounded-xl divide-y-8  divide-gray-800 self-center md:self-auto bg-gradient-to-b from-purple-400 to-yellow-200"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">Tech Stack</h1>
              <Image src={'/code.svg'} width={100} height={100} />
            </div>
            <div className="grid grid-cols-2 items-center gap-8 pt-10 md:flex md:flex-row md:flex-wrap">
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/flutter.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/nextjs.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/nodejs.svg'} width={100} height={200} />
              </div>
              <div className="flex transform items-center transition-all hover:z-50 hover:scale-110">
                <Image src={'/solidity.svg'} width={100} height={100} />
                <span>Solidity</span>
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/c.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/c++.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/css.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/dart.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/electron.svg'} width={100} height={150} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/express.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/firebase.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/flask.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/git.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/html.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/java.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/linux.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/mongodb.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/mysql.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/php.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/python.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/tailwind.svg'} width={100} height={200} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/typescript.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-50 hover:scale-110">
                <Image src={'/javascript.svg'} width={100} height={100} />
              </div>
            </div>
          </section>

          <section
            id="edu"
            className="m-5 rounded-xl  divide-y-8 divide-gray-800 self-center text-4xl bg-gradient-to-b from-yellow-200 to-teal-300"
          >
            <div className='flex flex-col items-center space-y-10'>
              <div >Education</div>
              <Image src={'/school.svg'} width={100} height={100} />
            </div>

            <div className="flex flex-col space-y-10 divide-y-2 divide-gray-800 pt-2 text-2xl">
              <div className="flex transform items-center space-x-10 border-t-0 p-2 text-xl transition-all hover:z-50 hover:z-50 hover:scale-110">
                <div className="rounded-3xl">
                  <Image src={'/vit.jpg'} width={300} height={200} />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold">
                    Vellore Institute of Technology, Chennai
                  </span>
                  <span className="ml-auto text-black">
                    {' '}
                    - Computer Science Engineering
                  </span>
                  <span className="ml-auto text-black"> - 8.0 CGPA</span>
                </div>
              </div>
              <div className="flex transform items-center space-x-10 border-t-0 p-2 text-xl transition-all  hover:z-50 hover:z-50 hover:scale-110">
                <div className="rounded-3xl">
                  <Image src={'/sbsms.webp'} width={300} height={200} />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold">SBSMS, Delhi</span>
                  <span className="ml-auto text-black">
                    {' '}
                    - Senior Secondary Education
                  </span>
                  <span className="ml-auto text-black"> - 96.2%</span>
                </div>
              </div>
              <div className="flex transform items-center space-x-10 border-t-0 p-2 text-xl transition-all  hover:z-50 hover:z-50 hover:scale-110">
                <div className="rounded-3xl">
                  <Image src={'/adarsh.jfif'} width={300} height={200} />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold">Adarsh Public School, Delhi</span>
                  <span className="ml-auto text-black">
                    {' '}
                    - Secondary Education
                  </span>
                  <span className="ml-auto text-black"> - 85.6%</span>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="m-5 rounded-xl divide-y-8 p-5 divide-gray-800 self-center bg-gradient-to-b from-teal-300 to-rose-300"
          >
            <div className="flex flex-col items-center">
              <div className='text-4xl'>Projects</div>
              <Image src={'/project.svg'} width={100} height={100} />
            </div>
            <div className="flex flex-col space-y-20 md:space-y-0 pt-10 md:grid md:grid-cols-2 md:gap-20">
              <div className="flex transform flex-col space-y-8 transition-all hover:z-50 hover:z-50 hover:scale-110">
                <Image
                  src={'/bitua.png'}
                  className="rounded-2xl"
                  width={500}
                  height={400}
                />
                <div>
                  <div className="text-xl font-bold">Bitua</div>
                  <div className="text-black">
                    A mobile app for managing crypto currency
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>Flutter and Firebase</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col space-y-8  transition-all hover:z-50 hover:z-50 hover:scale-110">
                <Image
                  src={'/just_chatting.png'}
                  className="rounded-2xl"
                  width={500}
                  height={400}
                />
                <div>
                  <div className="text-xl font-bold">Just Chatting</div>
                  <div className="text-black">
                    A web application for channel oriented messaging and
                    video/audio calling
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>NextJS, Pusher, Firebase and Jitsi</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col  space-y-8 transition-all hover:z-50 hover:z-50 hover:scale-110">
                <Image
                  src={'/ctf.jfif'}
                  className="rounded-2xl"
                  width={500}
                  height={400}
                />
                <div>
                  <div className="text-xl font-bold">Waspcon</div>
                  <div className="text-black">
                    A CTF event for student chapter of OWASP VIT
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>PHP, MySQL, HTML</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col  space-y-8 transition-all hover:z-50 hover:z-50 hover:scale-110">
                <Image
                  src={'/chess.png'}
                  className="rounded-2xl"
                  width={500}
                  height={400}
                />
                <div>
                  <div className="text-xl font-bold">
                    Chess-Coordinate-Practice
                  </div>
                  <div className="text-black">
                    A chess square notation practice game
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>PyGame</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col space-y-8  transition-all hover:z-50 hover:z-50 hover:scale-110">
                <Image
                  src={'/ezvoter.png'}
                  className="rounded-2xl"
                  width={500}
                  height={400}
                />
                <div>
                  <div className="text-xl font-bold">EZVoter</div>
                  <div className="text-black">
                    A Decentralized Voting System Web App
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>Solidity, HardHatJS, NextJS, MetaMask</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col  space-y-8 transition-all hover:z-50 hover:z-50 hover:scale-110">
                <Image
                  src={'/todo.png'}
                  className="rounded-2xl"
                  width={500}
                  height={400}
                />
                <div>
                  <div className="text-xl font-bold">ToDoer</div>
                  <div className="text-black">
                    A full stack web app for managing your todos
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>
                      NodeJS, ExpressJS, SQLite, HTML, CSS, JavaScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="w-4/5 m-5 self-center rounded-full p-2 bg-gradient-to-b from-rose-300 to-cyan-200">
            <div className="flex flex-col items-center mb-2">
              <div className='text-4xl'>Contact</div>
              <Image src={'/contact.svg'} width={100} height={50} />
            </div>
            <hr className="col-span-2 border-black"></hr>
            <form className="m-2 flex flex-col p-2">
              <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-2">
                <label className="text-center text-2xl md:ml-auto md:mr-10">
                  Name -
                </label>
                <input
                  className="ml-auto mr-auto rounded-lg border-2 border-gray-800 bg-transparent p-1"
                  type="text"
                />

                <label className=" text-center text-2xl md:ml-auto md:mr-10">
                  Message -
                </label>
                <textarea
                  cols={35}
                  rows={3}
                  className="ml-auto mr-auto border-2 border-gray-800 bg-transparent p-2"
                />
              </div>
              <span className="mt-5 self-center">
                <button className="rounded-full border-2 border-gray-800 p-2 px-3 text-center text-xl hover:cursor-pointer hover:bg-purple-300">
                  Send
                </button>
              </span>
            </form>
          </section>
        </main>
        <footer className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-xl md:flex md:justify-between md:space-x-32">
            <div className="transform transition-all hover:z-50 hover:scale-110">
              <a href="mailto: hemangahujaeotw@gmail.com">
                <Image src={'/mail.svg'} width={50} height={50} />
              </a>
            </div>
            <div className="transform transition-all hover:z-50 hover:scale-110">
              <a href="https://github.com/hemangahuja">
                <Image src={'/github.svg'} width={50} height={50} />
              </a>
            </div>
            <div className="transform transition-all hover:z-50 hover:scale-110">
              <a href="https://www.linkedin.com/in/hemangahuja/">
                <Image src={'/linkedin.svg'} width={50} height={50} />
              </a>
            </div>
            <div className="transform transition-all hover:z-50 hover:scale-110">
              <a href="https://twitter.com/HemangAhuja3">
                <Image src={'/twitter.svg'} width={50} height={50} />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </>
  )
}
