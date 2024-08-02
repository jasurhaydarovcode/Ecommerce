import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='container'>
                    <footer className="bg-white py-8">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full md:w-1/4 text-gray-700">
                                    <p className="mb-4">
                                        400 University Drive Suite 200 Coral Gables,<br />
                                        FL 33134 USA
                                    </p>
                                </div>
                                <div className="w-full md:w-1/4">
                                    <h5 className="text-gray-500 font-bold mb-2">Links</h5>
                                    <ul className='leading-[60px]'>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">Home</a></li>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">Shop</a></li>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">About</a></li>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/4">
                                    <h5 className="text-gray-500 font-bold mb-2">Help</h5>
                                    <ul className='leading-[60px]'>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">Payment Options</a></li>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">Returns</a></li>
                                        <li className="mb-2"><a href="#" className="text-black font-semibold hover:text-gray-900">Privacy Policies</a></li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/4 leading-[60px]">
                                    <h5 className="text-gray-500 font-bold mb-10">Newsletter</h5>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border-b-2 rounded-l-md focus:outline-none"
                                            placeholder="Enter Your Email Address"
                                        />
                                        <button className="border-b-2 text-black border-b-black px-4 py-2 rounded-r-md">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h2 className='py-8 font-bold'>2022 Meubel. All rights reserved</h2>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer