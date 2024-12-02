import { star } from "../assets/icons"
import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
	return (
		<section id="product" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-bold font-montserrat mb-3">Our <span className="text-coral-red">Popular</span> Products</h2>
				<p className="lg:max-w-lg mt-2 text-slate-gray font-palanquin">Experience a top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value!</p>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full p-2 sm:gap-6 gap-14 mt-6 border-coral-red">
				{products.map((prod, i) => (
					// <div key={i}>
					// 	<div className="h-fit my-10 max-sm:my-3">
					// 		<img src={imgURL} alt="products" className="object-center" />
					// 	</div>
					// 	<div className="flex items-center gap-2">
					// 		<img src={star} alt="star" className="inline-block object-contain w-7" />
					// 		<span className="text-lg text-slate-gray font-montserrat pt-">(4.5)</span>
					// 	</div>
					// </div>
					<PopularProductCard key={i} {...prod} />
				))}
			</div>

		</section>
	)
}

export default PopularProducts