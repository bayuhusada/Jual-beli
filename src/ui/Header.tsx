import { useState } from 'react'
import { logo } from '../assets'
import { ArrowFatLineDown, MagnifyingGlass, ShoppingCartSimple, Star, User, X } from '@phosphor-icons/react'
import Container from './Container'

const buttonNavigation = [
  {title: 'Home', link:'/'},
  {title: 'Shop', link:'/product'},
  {title: 'Cart', link:'/cart'},
  {title: 'Orders', link:'/order'},
  {title: 'My Account', link:'/profile'},
  {title: 'Blog', link:'/blog'},
]

const Header = () => {
  const[searchText, setSearchText]=useState('')
    return (
    <div className='w-full bg-dark'>
      <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
        <img src={logo} alt="" className='w-44' />
        <div className='hidden md:inline-flex max-w-3xl w-full relative '>
          <input type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText} placeholder='Cari product...' className='w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm right-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-4 py-2' />
          {searchText ? (
            <X onClick={() => setSearchText('')} className='absolute top-2 right-4 text-3xl hover:text-oreng' />
          ): (
            <MagnifyingGlass className='absolute top-2 right-4 text-3xl'/>
          )}
        </div>
        <div className='flex items-center gap-x-6 text-3xl'>
          <User className='text-white hover:text-oreng'/>
          <div className='relative block'>
            <Star className='text-white hover:text-secondary'/>
            <span className='inline-flex items-center justify-center bg-red-500 text-light absolute -top-2 -right-1 text-[9px] rounded-full w-4 h-4'>
              0
            </span>
          </div>
          <div className='relative block'>
            <ShoppingCartSimple className='text-white hover:text-secondary'/>
            <span className='inline-flex items-center justify-center bg-red-500 text-light absolute -top-2 -right-1 text-[9px] rounded-full w-4 h-4'>
              0
            </span>
          </div>
        </div>
      </div>
      <div className='w-full bg-white text-primary'>
        <Container className='py-3 max-w-4xl flex items-center gap-5 justify-between'>
          <p className='flex items-center gap-1'>
            selectr category <ArrowFatLineDown/>
          </p>
          {
            buttonNavigation.map(({title})=>(
              <p key={title} className='uppercase hidden md:inline-flex text-sm font-semibold text-primary hover:text-oreng duration-500 overflow-hidden group'
              >{title}</p>
            )) 
          }
        </Container>
      </div>
    </div>
  )
}

export default Header