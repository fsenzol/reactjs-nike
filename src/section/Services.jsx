import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
	return (
		<section className="max-container flex justify-center flex-wrap gap-9">

			<div className="w-full flex flex-wrap max-lg:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-9">
				{services.map(({ imgURL, label, subtext }, index) => (
					<ServiceCard key={index} label={label} subtext={subtext} imgURL={imgURL} />
				))}
			</div>

		</section>
	)
}

export default Services