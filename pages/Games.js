import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
// import connectDb from "../../middleware/mongoose"
import mongoose from 'mongoose'
import Product from './models/Product'


const Games = ({ products }) => {
  return (
    <div>

      <Head />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && <p> Sorry Sir . This Item's Are Out of Stock...</p>}
            {Object.keys(products).map((item) => {
              return <Link legacyBehavior key={products[item]._id} className="block relative rounded overflow-hidden" href={`product/${products[item].slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-md rounded m-5">
                <a className='block relative rounded overflow-hidden'>
                  <img alt="ecommerce" className=" mx-auto h-[36vh] block" src={products[item].img} />
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">₹ {products[item].price}</p>

                  <div className="mt-1">
                    {products[item].size.includes('S') && <span className='border border-gray-600 px-1 mx-1 font-bold'>S</span>}
                    {products[item].size.includes('M') && <span className='border border-gray-600 px-1 mx-1 font-bold'>M</span>}
                    {products[item].size.includes('L') && <span className='border border-gray-600 px-1 mx-1 font-bold'>L</span>} {/* ANY SIZE YOU WANT TO ADD */}
                    {products[item].size.includes('XL') && <span className='border border-gray-600 px-1 mx-1 font-bold'>XL</span>}
                    {products[item].size.includes('XXL') && <span className='border border-gray-600 px-1 mx-1 font-bold'>XXL</span>}
                  </div> {/*S , M , L , XL , XXL ==> RAW CODE CHANGE TO MAP FUNCTION*/}

                  <div className="mt-1">
                    {products[item].color.includes('Red') && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Violet') && <button className="border-2 border-gray-300 ml-1 bg-violet-700 rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Green') && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Orenge') && <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-orange-500"></button>}  {/* ANY COLOUR YOU WANT TO ADD */}
                    {products[item].color.includes('White') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                    {products[item].color.includes('Yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-orange-500"></button>}
                  </div> {/*S , M , L , XL , XXL ==> RAW CODE CHANGE TO MAP FUNCTION*/}
                </div>
              </div>
              </Link>
            })}
          </div>
        </div>

      </section >
    </div >
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'Game' }) // Enter Your Category Name Like Tshirt/tshirt/T-shirt  // In My Case This Is T - Shirt
  let Games = {}
  for (let item of products) {
    if (item.title in Games) {
      if (!Games[item.title].color.includes(item.color) && item.availablQty > 0) {
        Games[item.title].color.push(item.color)
      }
      if (!Games[item.title].size.includes(item.size) && item.availablQty > 0) {
        Games[item.title].size.push(item.size)
      }
    }
    else {
      Games[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availablQty > 0) {
        Games[item.title].color = [item.color]
        Games[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(Games)) }, // will be passed to the page component as props
  }
}

export default Games