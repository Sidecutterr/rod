import React from 'react'

const Rodowners = () => {
  return (
    <div id="rod">
      <div className='max-h-full py-16 w-full bg-owner-color bg-cover flex flex-col justify-between'>
        <div className='md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>
                <h2 className='font-bold text-3xl font-Aldrich'>ROD OWNERS</h2>

                <ul className='py-8 font-semibold list-disc text-1xl font-Aldrich leading-10'>
                  <h2 className=' leading-10 font-bold text-2xl font-Aldrich'>YOU OWN THE IP</h2>
                  <li className='text-white'>By owning a ROD NFT you own the underlying artwork and all of its to their qualifications.</li>
                  <h2 className=' leading-10 font-bold text-2xl font-Aldrich'>GIVEAWAY</h2>
                  <li className='text-white'>10 ROD NFT holders, which we will randomly select in every 1000 sales, will win the Ethereum we determined.</li>
                  <h2 className=' leading-10 font-bold text-2xl font-Aldrich'>ROD GAME</h2>
                  <li className='text-white'>ROD Nft owners will be able to use it in <b>ROD GAME</b> , and after the 3rd Project and our last project, <b>ROD MAP</b>, they will be able to win extra rewards in the game.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Rodowners
