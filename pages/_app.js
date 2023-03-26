import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import router, { useRouter } from 'next/router'
import Head from '@/components/Head'


export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})  // In This SetCart S Is Problem Thats Mean S Or s //
  const [subTotal, setSubTotal] = useState(0)
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value : null})
  const [key, setKey] = useState(0)
  const router = useRouter()




  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(100)
    })
    console.log("Hey I Am useEffect From _app.js")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.error(error);
      localStorage.clear()
    }

    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value : token })
    }
    setKey(Math.random()) // if you get any problem plese do it up...

  }, [router.query])

  const logout = ()=> {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }


  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart)
    let subt = 0
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {itemCode: { qty: 1, price, name, size, variant }}
    
    setCart(newCart)
    saveCart(newCart)
    console.log(newCart)
    router.push('/Chakout')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart)
    saveCart(newCart)
  }

  return <>
    <Head />
    <LoadingBar color='#f99901' progress={progress} waitingTime={400} height={`3.5px`} onLoaderFinished={() => setProgress(0)} />
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
