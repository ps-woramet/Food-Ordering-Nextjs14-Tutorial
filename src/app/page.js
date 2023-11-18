import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionHeaders'

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className='text-center my-6'>
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'}/>
        <div className='text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 text-center'>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>  
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
        <div className='mt-8'></div>
        <a className='text-2xl underline text-gray-500' href="tel:+4673812312">+46 738 123 123</a>
      </section>
    </>
  )
}
