import { useRef } from "react"
import { star } from "../assets/icons"
import gsap from "gsap"

const PopularProductCard = ({ key, imgURL, name, price }) => {

	const shoeRef = useRef()

	const handleHover = () => {
		gsap.to(shoeRef.current, {
			z: 20,
			scaleX: 1.1,
			scaleY: 1.1,
			opacity: 2,
			duration: 0.5,
			ease: "power4.out"
		})
	}

	const handleHoverOut = () => {
		gsap.to(shoeRef.current, {
			scaleX: 1,
			scaleY: 1,
			opacity: 0.9,
			z: 0,
			duration: 0.5,
			ease: "power4.out"
		})
	}

	const handleClick = () => {
		gsap.fromTo(shoeRef.current, {
			scaleX: 1,
			scaleY: 1,
			z: 20,
			duration: 0.3,
			ease: "power1.in"
		}, {
			scaleX: 1.1,
			scaleY: 1.1,
			z: 20,
			duration: 0.3,
			ease: "power1.in"
		})
	}


	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full" >
			<img src={imgURL} alt={name} className="w-[280px] h-[280px-]" ref={shoeRef} onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}/>
			<div className="mt-8 flex justify-start gap-2.5">
				<img src={star} alt="rating" width={24} height={24}/>
				<p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
			</div>
			<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
			<p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl">{price}</p>
		</div>
	)
}

export default PopularProductCard