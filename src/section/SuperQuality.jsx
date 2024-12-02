import { shoe4, shoe8 } from "../assets/images"
import { Button } from "../components/Button"
import { shoes } from "../constants"

const SuperQuality = () => {
	return (
		<section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
			<div className="flex flex-1 flex-col">
				<h2 className="text-4xl capitalize lg:max-w-lg font-bold font-montserrat leading-1">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
				<p className="mt-4 mb-4 lg:max-w-lg info-text font-palanquin text-slate-gray text-xl">Ensuring premium confort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance!</p>
				<p className="mt-4 mb-4 lg:max-w-lg info-text font-palanquin text-slate-gray text-xl">Our dedication to details and excellence ensures your satisfaction!</p>
				<div>
					<Button label="View details" />
				</div>
			</div>
			<div className="flex-1 flex justify-center items-center">
				<img src={shoe8} alt="shoes" width={570} height={522} className="object-contain"/>
			</div>
		</section>
	)
}

export default SuperQuality