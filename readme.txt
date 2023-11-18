0. install project

    npm create next-app .

    √ Would you like to use TypeScript? No
    √ Would you like to use ESLint? Yes
    √ Would you like to use Tailwind CSS? Yes
    √ Would you like to use `src/` directory? Yes
    √ Would you like to use App Router? (recommended) Yes
    √ Would you like to customize the default import alias (@/*)? No

    -run server

    npm run dev

1. ทำการสร้าง folder src > components *สร้างใน src ไม่ใช่ app

    -src > components > icons > Right.js

        import React from 'react'
        //Heroicons.com
        const Right = ({className="w-6 h-6"}) => {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={className}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        )
        }

        export default Right

    -src > components > layout > Header.js

        import Link from 'next/link'

        export default function Header(){
            return (
                <header className='flex items-center justify-between pb-2'>
                    <Link className='text-primary font-semibold text-2xl' href="">ST PIZZA</Link>
                    <nav className='flex items-center gap-8 font-semibold'>
                        <Link href={''}>Home</Link>
                        <Link href={''}>Menu</Link>
                        <Link href={''}>About</Link>
                        <Link href={''}>Contact</Link>
                    </nav>
                    <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
                    <Link href={'/login'}>Login</Link>
                        <Link href={'/register'} className='bg-primary rounded-full text-white px-6 py-2'>Register</Link>
                    </nav>
                </header>
            )
        }

    -src > components > layout > Hero.js
    
        import Image from "next/image"
        import Right from "../icons/Right"

        export default function Hero(){
            return (
                <section className="hero">
                    <div className="py-12">
                        <h1 className="text-4xl font-semibold leading-normal">Everything <br/>is better <br/>with a&nbsp;<span className="text-primary">Pizza</span></h1>
                        <p className="my-4 text-gray-500 text-sm">
                            Pizza is the missing piece that makes every day complete,
                            a simple yet delicious joy in life
                        </p>
                        <div className="flex gap-4 text-sm">
                            <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full">
                                Order now
                                <Right/>
                            </button>
                            <button className="flex items-center rounded gap-2 py-2 text-gray-600 font-semibold">
                                Learn more
                                <Right/>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={'/pizza.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
                    </div>
                </section>
            )
        }
    
    -src > components > layout > HomeMenu.js

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

    -src > components > layout > SectionHeaders.js

        import React from 'react'

        const SectionHeaders = ({subHeader, mainHeader}) => {
        return (
            <>
                <h3 className='uppercase text-gray-500 font-semibold'>{subHeader}</h3>
                <h2 className='text-primary font-bold text-4xl italic'>{mainHeader}</h2>
            </>
        )
        }

        export default SectionHeaders

    -src > components > menu > MenuItem.js

        import React from 'react'

        const MenuItem = () => {
        return (
            <div className='bg-gray-100 p-4 rounded-lg flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-gray transition-all'>
                <div className='text-center'>
                    <img src='/pizza3.png' className='max-h-auto max-h-24 flex mx-auto' alt="pizza"/>
                </div>
                <h4 className='font-semibold text-xl my-2 text-center'>Peperoni Pizza</h4>
                <p className='text-gray-500 text-sm text-center pb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
                <button className='bg-primary text-white rounded-full px-4 py-2'>
                    Add to card $12
                </button>
            </div>
        )
        }

        export default MenuItem

2. Tailwind.config.js สร้างสี primary, global.css กำหนด css ใน container

    -tailwind.config.js

        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        theme: {
            extend: {
            colors: {
                primary: '#f13a01',
            }
            },
        },
        plugins: [],
        }

    -globals.css

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        section.hero{
            @apply grid;
            gap: 1rem;
            grid-template-columns: .4fr .6fr;
        }

3. แก้ไข src > app > layout.js

    import { Roboto } from 'next/font/google'
    import './globals.css'

    const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

    export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
    }

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={roboto.className}>
            <main className='max-w-4xl mx-auto p-4'>
            {children}
            </main>
        </body>
        </html>
    )
    }

4. แก้ไข page.js

    import Header from '@/components/layout/Header'
    import Hero from '@/components/layout/Hero'
    import HomeMenu from '@/components/layout/HomeMenu'
    import SectionHeaders from '@/components/layout/SectionHeaders'

    export default function Home() {
    return (
        <>
        <Header/>
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
        <footer className='border-t p-8 text-center'>
            &copy; 2013 All rights reserved
        </footer>
        </>
    )
    }

5. *สร้าง route โดยการตั้งชื่อ folder ใน *****app ว่า register และสร้างไฟล์ page.js แล้วสร้าง function components ชื่ออะไรก็ได้
    
    -src > app > layout.js นำ Header และ footer จาก src > app > page.js ย้ายมานี่

        export default function RootLayout({ children }) {
        return (
            <html lang="en">
            <body className={roboto.className}>
                <main className='max-w-4xl mx-auto p-4'>
                <Header/>
                {children}
                <footer className='border-t p-8 text-center'>
                    &copy; 2013 All rights reserved
                </footer>
                </main>
            </body>
            </html>
        )
        }

    -src > app > register > page.js

        import React from 'react'
        import Image from 'next/image'

        const RegisterPage = () => {
        return (
            <section className='mt-8 mb-8'>
                <h1 className='text-center text-primary text-4xl'>Register</h1>
                <form className='block max-w-xs mx-auto'>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button type="submit">Register</button>
                    <div className='my-4 text-center text-gray-400'>
                        or login with provider
                    </div>
                    <button className='flex gap-4 justify-center'>
                        <Image src={'/google.png'} alt={''} width={24} height={24}/>
                        Login with google
                    </button>
                </form>
            </section>
        )
        }

        export default RegisterPage
        
    -src > globals.css เพิ่ม css ของ input

        input[type="email"],
        input[type="password"],
        input[type="text"] {
        @apply block w-full my-4 rounded-xl;
        @apply border p-2 border-gray-300 bg-gray-100;
        }

        button{
        @apply block w-full text-gray-700 font-semibold;
        @apply border border-gray-300 rounded-xl px-6 py-2
        }
        button[type="submit"], .submit{
        @apply border-0 bg-primary text-white
        }

6. ติดตั้ง next auth จาก https://next-auth.js.org/getting-started/example

    cmd: npm install next-auth

    สร้าง folder ตาม guild > https://next-auth.js.org/configuration/initialization#route-handlers-app

    -src > app > api > auth > [...nextauth] > route.ts

        import NextAuth from "next-auth"

        const handler = NextAuth({
        
        })

        export { handler as GET, handler as POST }

    จากนั้นเราต้องการ provider เป็น credentials https://next-auth.js.org/configuration/providers/credentials 








