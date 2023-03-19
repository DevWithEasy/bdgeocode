import axios from 'axios'
import Head from 'next/head'
import ApiLink from '../components/ApiLink'
import Hero from '../components/Hero'
import SelectList from '../components/SelectList'

export async function getServerSideProps(context) {
  const res = await axios.get('https://bdapi.vercel.app/api/v.1/division')
  return {
    props: {
      data : res.data.data
    },
  }
}

export default function Home({data}) {

  return (
    <>
      <Head>
        <title>BDApi - Find Divisions,Districts,Upazillas and Unions easy</title>
        <meta name="description" content="Bangladesh Division district upazilla and unions name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='md:h-screen relative w-full'>
          <img
            src='/Flag_Map_of_Bangladesh1.png'
            className='mx-auto h-screen opacity-10'
          />
          <div className='absolute top-0 left-0 w-full md:h-screen bg-gradient-to-r from-green-600/25 to-red-500/25 '>
            <div className=''>
              <h1 className='p-2 text-center text-4xl font-bold bg-white/80 shadow-md'>BDApi</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full gap-x-2 px-4 md:px-0 pb-6 md:pb-0 pt-2 md:pt-0'>
              <Hero/>
              <SelectList divisions={data}/>
              <ApiLink/>
            </div>
          </div>
      </main>
    </>
  )
}
