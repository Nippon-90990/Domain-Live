import React from 'react'
import Link from 'next/link'

const Forgot = () => {
    return (
        <div>
            <div>
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <img className="mx-auto h-12 w-auto" src="/flipcart.jpg" alt="Your Company" />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset Your Account</h2>
                            <div className="mt-2 text-center text-sm text-black">
                                Or
                                <div><Link href={'/Singup'} className="font-medium text-orange-600 hover:text-orange-500">Login In Your Account</Link></div>
                            </div>
                        </div>
                        <form className="mt-8 space-y-6" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div className='mb-5'>
                                    <label htmlFor='email' className='sr-only'>Email Address</label>
                                    <input id='email' name='email' type='email' autoComplete='email' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm' placeholder='Enter Your Email' />
                                </div>
                                {/* <div>
                                    <label htmlFor='password' className='sr-only'>Password</label>
                                    <input id='password' name='password' type='password' autoComplete='password' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm' placeholder='Enter Your Password' />
                                </div> */}
                            </div>

                            {/* <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Forgot your password?</a>
                                </div>
                            </div> */}

                            <div>
                                <button type="submit" className="group relative flex w-full justify-center rounded-md bg-orange-500 py-2 px-3 text-sm font-semibold text-white hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-orange-500 group-hover:text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot