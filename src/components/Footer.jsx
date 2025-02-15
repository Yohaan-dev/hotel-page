import React from 'react'
import {FaWhatsapp,FaEnvelope,FaFacebook,FaPhone,FaClock} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-blue-950 p-10 flex flex-col md:flex-1 md:flex-row md:items-center sm:items-start gap-4">
      <div className="flex flex-1 flex-col gap-3">
        <h1 className="text-2xl text-gray-400 cursor-pointer hover:text-gray-500">Help Center</h1>
        <p className="text-white cursor-pointer hover:text-gray-600">Pre-Travel Info</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Book Pre Tour Accommodation</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Visas</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Travel Insurance</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Travel With Confidence</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Contact Us</p>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h1 className="text-2xl text-gray-400 cursor-pointer hover:text-gray-500">Legal</h1>
        <p className="text-white cursor-pointer hover:text-gray-600">Terms & Conditions</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Privacy Policy</p>
        <p className="text-white cursor-pointer hover:text-gray-600">Cookies</p>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h1 className="text-2xl text-gray-400 cursor-pointer hover:text-gray-500">Get In Touch</h1>
        <a className="flex flex-row text-white cursor-pointer hover:text-gray-600" href="https://wa.me/+254743955900" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="mr-4" size={20} color="green" />WhatsApp</a>
        <a className="flex flex-row pr-4 text-white cursor-pointer hover:text-gray-600" href="https://info@company.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="mr-4" size={20} color="green" />info@company.com</a>
        <a className="flex flex-row pr-4 text-white cursor-pointer hover:text-gray-600" href="https://Facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="mr-4" size={20} color="green" />Facebook</a>
        <a className="flex flex-row pr-4 text-white cursor-pointer hover:text-gray-600" href="https://+254743955900" target="_blank" rel="noopener noreferrer">
        <FaPhone className="mr-4" size={20} color="green" />+254743955900</a>
        <a className="flex flex-row pr-4" href="https://Clock" target="_blank" rel="noopener noreferrer">
          <FaClock className="mr-4" size={20} color="green" /><div className="flex flex-col">
            <p className="text-white cursor-pointer hover:text-gray-600">Mon-Fri: 00:00 AM-04:00PM(GMT)</p>
            <p className="text-white cursor-pointer hover:text-gray-600">Sat: 05:00 AM-01:00PM(GMT)</p>
            <p className="text-white cursor-pointer hover:text-gray-600">Sun: Closed</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer