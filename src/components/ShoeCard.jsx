import gsap from "gsap"
import { useEffect, useRef } from "react"

const ShoeCard = ({img, changeBigShoe, bigShoe}) => {
	const handleClick = () => {
		if (bigShoe !== img) {
			changeBigShoe(img)
		}
	}

	const shoeRef = useRef()

	const handleHover = () => {
		gsap.to(shoeRef.current, {
			z: 20,
			scaleX: 1.2,
			scaleY: 1.2,
			duration: 0.5,
			ease: "power4.out"
		})
	}

	const handleHoverOut = () => {
		gsap.to(shoeRef.current, {
			scaleX: 1,
			scaleY: 1,
			z:0,
			duration: 0.5,
			ease: "power4.out"
		})
	}


  return (
	<div className={`border-2 rounded-xl ${bigShoe === img ? "border-coral-red" : "border-transparent"} pointer-cursor`}
	 onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>

		<div className="flex justify-center items-center object-contain bg-center bg-cover bg-card sm:h-40 sm:w-40 rounded-xl max-sm p-4">
			<img src={img} 
			ref={shoeRef}
			alt="shoe collection"
			width={127}
			height={103} />
			
		</div>

	</div>
  )
}

export default ShoeCard