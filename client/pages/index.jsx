import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { TrendingUpIcon, ArrowNarrowLeftIcon,  ArrowNarrowRightIcon } from '@heroicons/react/outline';
import CardHeader from '../components/CardHeader';

export default function Home() {
  return (
    <div className="w-full bg-green-50">
      <Head>
        <title >Fare Officiel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*  #028174 */}
      {/* #0AB69B */}
      <main class="bg-[#028174b9]  relative max-h-screen overflow-hidden">
        <header class="h-24 sm:h-32 flex items-center z-30 w-full">
          <NavBar />
        </header>
        <div class=" bg-transparent flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
              <span class="w-20 h-2 bg-green-50 dark:bg-white mb-12">
              </span>
              <h1 class="font-body text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-green-50">
                Accure an Elegant
                <span class="text-5xl sm:text-7xl">
                  Outfit-for Men
                </span>
              </h1>
              <p class="font-sanchez text-sm w-3/4 sm:mt-10 sm:text-xl text-green-50 dark:text-white">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
              </p>
              <div className="mt-10">
                <a href="#" className="font-sanchez text-green-100 hover:underline transition-all duration-200 text-2xl w-max flex">
                  Shop Now <TrendingUpIcon className="text-green-100 ml-4 h-8 w-8" />
                </a>
              </div>
            </div>
            


            {/* Left side  */}
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src="/image.jpg" className="w-3/4 lg:-mt-24  lg:max-w-lg md max-w-sm m-auto" />
            </div>
          </div>
        </div>
      </main>

      <section className="relative w-4/5 mx-auto">
        <div className=" lg:-mt-60">
          <h1 className="capitalize font-sanchez text-3xl text-gray-800 lg:text-green-100 underline mb-12">Popular Products</h1>
          <div className="flex gap-x-6">
            <CardHeader imageUri="https://via.placeholder.com/280x300?text=Products" productName="Orchard chirt cream" price={1500} />
            <CardHeader imageUri="https://via.placeholder.com/280x300?text=Products" productName="Orchard chirt cream" price={25000}/>
            <CardHeader imageUri="https://via.placeholder.com/280x300?text=Products" productName="Orchard chirt cream" price={35000}/>
            
            
            <span className="mt-auto mb-20 flex space-x-8">
              <ArrowNarrowLeftIcon  className="text-gray-600 w-12 "/>
              <ArrowNarrowRightIcon className="text-gray-600 w-12" />
            </span>
          </div>
        </div>

        <div className="mt-32">
          <img className="w-[34em] h-[26em] object-cover object-center" src="https://images.pexels.com/photos/7624513/pexels-photo-7624513.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7624513.jpg&fm=jpg" alt="" />
        </div>
      </section>

      

      <footer className="flex items-center justify-center w-full h-24 border-t">
        
      </footer>
    </div>
  );
}
