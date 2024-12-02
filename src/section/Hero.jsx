import { useState, useRef } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { Button } from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

export const Hero = () => {

	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

	return (
		<section id="home" className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">

			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x padding-t">
				<p className="font-montserrat text-xl text-coral-red">Our Summer Collections</p>

				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] ">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10" >The New Arrival</span>
					<br />
					<span className="text-coral-red inline-block mt-3 pr-5">Nike</span>
					Shoes
				</h1>

				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-sm">Discover stylish arrivals, quality comfort, and innovation for your active life</p>

				<Button label="Show now" iconUrl={arrowRight} />

				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map(({ value, label }, i) => (
						<div key={i} className="flex flex-col">
							<span className="text-4xl font-palanquin font-bold">{value}</span>
							<span className="leading-7 font-montserrat text-slate-gray">{label}</span>
						</div>
					))}
				</div>

			</div>

			<div className="relative flex-1 justify-center items-center flex xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img src={bigShoeImg} alt="shoe" width={610} height={500} className="object-contain relative z-10" />

				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">

					{shoes.map(({ bigShoe, thumbnail }, i) => (
						<div key={i}>
							<ShoeCard img={thumbnail} changeBigShoe={(shoe) => (setBigShoeImg(shoe))} bigShoe={bigShoeImg}/>
						</div>
					))}

				</div>
			</div>

		</section>
	)
}

export default Hero
