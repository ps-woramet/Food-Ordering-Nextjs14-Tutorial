import React from 'react'
import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
  return (
    <section className=''>
        <div className='absolute h-full left-0 right-0 w-full justify-start -z-50'>
            <div className='h-48 w-48 absolute -left-20 text-left'>
                <Image layout={'fill'} objectFit={'contain'} src={'/pizza3.png'} alt={'salad'}/>
            </div>
            <div className='h-48 w-48 absolute -top-5 -right-20'>
                <Image layout={'fill'} objectFit={'contain'} src={'/pizza3.png'} alt={'salad'}/>
            </div>
        </div>

        <div className='text-center pb-3'>
            <SectionHeaders subHeader={'check out'} mainHeader={'Menu'}/>
        </div>

        <div className='grid grid-cols-3 gap-4'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>

    </section>
  )
}

export default HomeMenu
