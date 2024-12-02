import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components/Button"

const SpecialOffer = () => {
	return (
		<section id="special" className="flex justify-between items-center max-lg:flex-col gap-10 max-container">

			<div>
				<img src={offer} width={773 * 2.5} height={687 * 2} />
			</div>


			<div>
				<h1 className="text-4xl font-bold leading-normal my-3"><span className="text-coral-red">Special </span>Offer</h1>
				<p className="text-slate-gray text-lg my-3">Embark on a shopping journey that redefines your experience with unbeatable deals.
					From premier selections to incredible savings, we offer unparralled value that set's us apart!
				</p>
				<p className="text-slate-gray text-lg my-5">
					Navigate a realm of possibilities designed to fullfil your unique desires, supassing
					the loftiest expectations. Your journey with us is nothing short of exceptional
				</p>

				<div className="flex flex-1 flex-row mt-9 gap-9 justify-start w-full">
					<Button label="Shop now" iconUrl={arrowRight} />

					<button className="px-7 py-5 ring-1 ring-slate-gray rounded-full">
						<p className="font-montserrat text-lg text-slate-gray">Learn  more</p>
					</button>
				</div>
			</div>

		</section>
	)
}

export default SpecialOffer