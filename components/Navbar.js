import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import dynamic from "next/dynamic";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    const [dropdown, setDropdown] = useState(false)
    // const setDropdown = ()=>{
    //     setDropdown(!dropdown)
    // }

    console.log({ cart, addToCart, removeFromCart, clearCart, subTotal })
    const toogleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }

        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef()

    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white z-10'>
            <div className="logo mr-auto md:mx-5"> {/* mx-10 mt-1 */}
                <Link href={'/'}><Image width={100} height={50} src='/flipcart.jpg' alt='' /></Link>
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-7 font-bold md:text-xl'>
                    <Link href={'/TShirts'}><li>T - Shirts</li></Link>
                    <Link href={'/Hoodies'}><li>Hoodies</li></Link>
                    <Link href={'/Stickers'}><li>Stickers</li></Link>
                    {/* <Link href={'/Headphones'}><li>Headphones</li></Link> */}
                    <Link href={'/Games'}><li>Games</li></Link>
                </ul>
            </div>
            <div className='cart items-center absolute right-0 mx-7 top-12 flex'>
                <a onMouseMove={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
                {dropdown && <div onMouseMove={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className='absolute right-10 bg-orange-400 top-7 rounded-md p-5 w-40'>
                    <ul>
                        <Link href={'/Account'}><li className='py-1 hover:text-white text-sm cursor-pointer'> My Account </li></Link>
                        <Link href={'/Orders'}><li className='py-1 hover:text-white text-sm cursor-pointer'> Ouders </li></Link>
                        <li onClick={logout} className='py-1 hover:text-white text-sm cursor-pointer'> Logout </li>
                    </ul>
                </div>}
            {user.value && <MdAccountCircle className='text-3xl mx-2' />}</a>
                {!user.value && <Link href={'/Login'}>
                    <button className='bg-orange-600 px-2 py-1 text-sm mx-2 text-white rounded'>Log In</button>
                </Link>}
                <AiOutlineShoppingCart onClick={toogleCart} className='text-3xl' />   {/* text-xl md:text-3xl     IF YOU WANT */}
            </div>


            <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-orange-300 px-10 py-10 transform transition-transform ${Object.keys(cart).length !==0 ? 'translate-x-0': 'translate-x-full'}`}>    {/* overflow-y-scroll ==> For Scrooling SideCart*/}
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toogleCart} className='absolute top-5 right-5 cursor-pointer text-2xl text-orange-500'><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>No Item in the cart. Please add few items in your cart and Checkout</div>}
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                        <div className='item flex my-5'>
                            <div className='w-2/3 font-semibold'>{cart[k].name} ( {cart[k].size} / {cart[k].variant} ) </div>
                            <div className='w-1/3 flex items-center justify-center font-semibold text-lg'>
                                <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-orange-500 text-sm' />
                                <span className='mx-2'>{cart[k].qty}</span> <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-orange-500 text-sm' />
                            </div>
                        </div>
                    </li>})}
                </ol>
                
                <span>Total : {subTotal}</span>

                <div className='flex'>
                    <Link href={'/Chakout'}><button className="flex mt-8 mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button></Link>
                    <button onClick={clearCart} className="flex mt-8 mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm">Clear Cart</button>
                </div>

            </div>


        </div>
    )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
