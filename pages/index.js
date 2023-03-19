import axios from 'axios'
import Head from 'next/head'
import ApiLink from '../components/ApiLink'
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
        <title>BD Geo Code</title>
        <meta name="description" content="Bangladesh Division district upazilla and unions name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen relative w-full'>
          <img
            src='/Flag_Map_of_Bangladesh1.png'
            className='mx-auto h-screen opacity-10'
          />
          <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-600/25 to-red-500/25'>
            <div className=''>
              <h1 className='p-2 text-center text-4xl font-bold bg-white/80 shadow-md'>BG Geo Code</h1>
            </div>
            <div className='flex justify-between w-full gap-x-2'>
              <div className='w-4/12'>

              </div>
              <SelectList divisions={data}/>
              <ApiLink/>
            </div>
          </div>
      </main>
    </>
  )
}
