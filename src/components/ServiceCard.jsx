import React from 'react'
import { truckFast } from '../assets/icons'
import { FaTruckFast } from 'react-icons/fa6'

const ServiceCard = ({ key, imgURL, label, subtext }) => {
	return (
		<div key={key} className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] z-10 shadow-xl px-10 py-16'>
			<div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
				<img src={imgURL} alt="image-label" width={24} height={24} />
			</div>

			<h2 className="font-palanquin text-3xl font-bold text-slate-900 my-5 leading-normal">{label}</h2>
			<p className="text-slate-gray my-3 break-words text-lg leading-normal">{subtext}</p>
		</div>
	)
}

export default ServiceCard