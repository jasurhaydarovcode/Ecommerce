import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container pt-10'>
                <div className='flex gap-[150px] justify-end'>
                    <ul className='flex gap-10 font-semibold items-center text-xl'>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/singleproduct">
                            <li>Product</li>
                        </Link>
                        <Link to="">
                            <li>About</li>
                        </Link>
                        <Link to="">
                            <li>Contact</li>
                        </Link>
                    </ul>

                    <ul className='flex text-2xl gap-10 items-center'>
                        <Link to="">
                            <li className='text-3xl'>
                                <IoIosSearch />
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <FaRegUser />
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <FaRegHeart />
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <FaCartShopping />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar