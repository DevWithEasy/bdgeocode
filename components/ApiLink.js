export default function ApiLink(){
    return(
        <div className='bg-white/80'>
                <div className='p-2'>
                  <p className='bg-gradient-to-r from-green-600/40 to-red-500/40 rounded-tl-full rounded-br-full text-center text-xl text-white font-bold'>Divisons</p>
                  <p>Get all divisons data</p>
                  <p className='py-1'>
                    <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/division</span>
                  </p>
                </div>

                <div className='p-2'>
                  <p className='bg-gradient-to-r from-green-600/40 to-red-500/40 rounded-tl-full rounded-br-full text-center text-xl text-white font-bold'>Districts</p>
                  <div className='my-1'>
                    <p>Get all districts data</p>
                    <p className=''>
                      <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/district</span>
                    </p>
                  </div>
                  <div className='my-1'>
                    <p>Get all districts of an division</p>
                    <p className=''>
                      <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/district</span>
                      <span className='underline underline-offset-4 bg-white'>/:divisionId</span>
                    </p>
                  </div>
                </div>

                <div className='p-2'>
                  <p className='bg-gradient-to-r from-green-600/40 to-red-500/40 rounded-tl-full rounded-br-full text-center text-xl text-white font-bold'>Upazilla</p>
                  <div className='my-1'>
                    <p>Get all upazillas data</p>
                    <p className=''>
                      <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/district</span>
                    </p>
                  </div>
                  <div className='my-1'>
                    <p>Get all upazillas of an districts</p>
                    <p className=''>
                      <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/district</span>
                      <span className='underline underline-offset-4 bg-white'>/:districtId</span>
                    </p>
                  </div>
                </div>

                <div className='p-2'>
                  <p className='bg-gradient-to-r from-green-600/40 to-red-500/40 rounded-tl-full rounded-br-full text-center text-xl text-white font-bold'>Unions</p>
                  <div className='my-1'>
                    <p>Get all unions data</p>
                    <p className=''>
                      <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/district</span>
                    </p>
                  </div>
                  <div className='my-1'>
                    <p>Get all unions of an upazilla</p>
                    <p className=''>
                      <span className='underline underline-offset-4'>https://bdapi.vercel.app/api/v.1/district</span>
                      <span className='underline underline-offset-4 bg-white'>/:upazillaId</span>
                    </p>
                  </div>
                </div>
              </div>
    )
}