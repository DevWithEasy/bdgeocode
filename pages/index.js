import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Head>
        <title>BD Geo Code</title>
        <meta name="description" content="Bangladesh Division district upazilla and unions name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen relative'>
          <img
            src='/Flag_Map_of_Bangladesh1.png'
            className='mx-auto h-screen opacity-10'
          />
          <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-600/25 to-red-500/25'>
            <div className=''>
              <h1 className='p-2 text-center text-4xl font-bold bg-white/80 shadow-md'>BG Geo Code</h1>
            </div>
            <div className='grid grid-cols-2 gap-4 p-10'>
              <div className='bg-white/80 p-2'>
                <p className='text-center text-xl'>Divisons</p>
                <p>Get all divisons data</p>
                <p className='py-1'>
                  <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/divison</span>
                </p>
              </div>

              <div className='bg-white/80 p-2'>
                <p className='text-center text-xl'>Districts</p>
                <div className='my-1'>
                  <p>Get all districts data</p>
                  <p className=''>
                    <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/district</span>
                  </p>
                </div>
                <div className='my-1'>
                  <p>Get all districts of an division</p>
                  <p className=''>
                    <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/district</span>
                    <span className='underline underline-offset-4 bg-white'>/:divisionId</span>
                  </p>
                </div>
              </div>

              <div className='bg-white/80 p-2'>
                <p className='text-center text-xl'>Upazilla</p>
                <div className='my-1'>
                  <p>Get all upazillas data</p>
                  <p className=''>
                    <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/district</span>
                  </p>
                </div>
                <div className='my-1'>
                  <p>Get all upazillas of an districts</p>
                  <p className=''>
                    <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/district</span>
                    <span className='underline underline-offset-4 bg-white'>/:districtId</span>
                  </p>
                </div>
              </div>

              <div className='bg-white/80 p-2'>
                <p className='text-center text-xl'>Unions</p>
                <div className='my-1'>
                  <p>Get all unions data</p>
                  <p className=''>
                    <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/district</span>
                  </p>
                </div>
                <div className='my-1'>
                  <p>Get all unions of an upazilla</p>
                  <p className=''>
                    <span className='underline underline-offset-4'>https://bdgeocode.vercel.app/api/v.1/district</span>
                    <span className='underline underline-offset-4 bg-white'>/:upazillaId</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}
