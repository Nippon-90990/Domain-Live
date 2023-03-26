import React from 'react'
import Link from 'next/link'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useState } from 'react';

const Chakout = ({cart,subTotal,addToCart,removeFromCart}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const [disabled, setDisabled] = useState(true)

  const handleChange = (e)=> {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'address') {
      setAddress(e.target.value)
    }
    else if (e.target.name == 'pincode') {
      setPincode(e.target.value)
    }

    if ( name.length>3 && email.length>3 && phone.length>3 && address.length>3 && pincode.length>3 ) {
      setDisabled(false)
    }
    else  {
      setDisabled(true)
    }
  }

  return (
    <div className='container px-2 sm:m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Chakout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='mb-4 relative'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-600'>Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className='w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='mb-4 relative'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>Email</label>
            <input onChange={handleChange} value={email} type="text" id="email" name="email" className='w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
      </div>

      <div className='px-2 w-full'>
        <div className='mb-4 relative'>
          <label htmlFor='address' className='leading-7 text-sm text-gray-600'>Address</label>
          <textarea onChange={handleChange} valu={address} id="address" name="address" rows={2} cols={30} className='w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'></textarea>
        </div>
      </div>

      <div className='mx-auto flex my-2'>

        <div className='px-2 w-1/2'>
          <div className='mb-4 relative'>
            <label htmlFor='phone' className='leading-7 text-sm text-gray-600'>Phone</label>
            <input onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className='w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        
        <div className='px-2 w-1/2'>
          <div className='mb-4 relative'>
            <label htmlFor='pincode' className='leading-7 text-sm text-gray-600'>Pincode</label>
            <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className='w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>

      </div>

      <div className='mx-auto flex my-2'>

        <div className='px-2 w-1/2'>
          <div className='mb-4 relative'>
            <label htmlFor='city' className='leading-7 text-sm text-gray-600'>City</label>
            <input type="text" value={city} id="city" name="city" className='read-only:bg-slate-50 w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' readOnly={true} />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className='mb-4 relative'>
            <label htmlFor='state' className='leading-7 text-sm text-gray-600'>State</label>
            <input type="text" value={state} id="state" name="state" className='read-only:bg-slate-50 w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' readOnly={true} />
          </div>
        </div>

      </div>

      <h2 className='font-semibold text-xl'>2. Review Cart Item</h2>
      <div className='sideCart bg-orange-300 p-6 m-2'>
        {/* <h2 className='font-bold text-xl text-center'>Shopping Cart</h2> */}

        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>No Item in the cart. Please add few items in your cart and Checkout</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='font-semibold'>{cart[k].name} ({cart[k].size} / {cart[k].variant}) </div>
                <div className='w-1/3 flex items-center justify-center font-semibold text-lg'>
                  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-orange-500 text-sm' />
                  <span className='mx-2'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-orange-500 text-sm' />
                </div>
              </div>
            </li>
          })}
        </ol>
          <span className='total font-semibold'>Subtotal :  {subTotal}</span>
      </div>

      <div className='mx-4'>
        <Link href={'/Chakout'}><button disabled={disabled} className='disabled:bg-orange-300 flex mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm'><BsFillBagCheckFill className='m-1'/>Checkout & Pay : {subTotal}</button></Link>
      </div>

    </div>
  )
}

export default Chakout