import React from 'react'

const Order = ({subTotal}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Zara Men's Shirt</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : # 59086</h1>
            <span>Your Order Was Plased Succesfully.</span>
            <div className="flex mb-4">
              <a className="flex-grow  py-2 text-lg px-1">Item Quantity</a>
              <a className="flex-grow  py-2 text-lg px-1">Item Description</a>
              <a className="flex-grow  py-2 text-lg px-1">Item Price</a>
            </div>
            <p className="leading-relaxed mb-4"></p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">1. T - Shirt (Black/M)</span>
              <span className="m-auto text-gray-900 text-center">1</span>
              <span className="m-auto text-gray-900 text-center">499</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">2. Hoodie (Yellow/M)</span>
              <span className="m-auto text-gray-900 text-center">1</span>
              <span className="m-auto text-gray-900 text-center">499</span>
            </div>
            <div className="flex border-t border-b border-gray-200  py-2">
              <span className="text-gray-500">3. Sticker (25 meater)</span>
              <span className="m-auto text-gray-900 text-center">1</span>
              <span className="m-auto text-gray-900 text-center">499</span>
            </div>
            <div className="mt-2 flex flex-col">
              <span className="title-font font-medium text-2xl text-gray-900">Total : ₹ 1,497</span>
              <button className='mt-5 button hover:bg-white hover:text-black'>Trac Your Order</button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://cdn.shopify.com/s/files/1/0388/4551/3859/files/Facetune_04-11-2021-10-00-13_480x480.jpg?v=1636046198" />
        </div>
      </div>
    </section>
  )
}

export default Order