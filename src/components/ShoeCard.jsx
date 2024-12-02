import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import ColorThief from "colorthief";

const ShoeCard = ({img, changeBigShoe, bigShoe}) => {
	const handleClick = () => {
		if (bigShoe !== img) {
			changeBigShoe(img)
		}
	}

	const [bgColor, setBgColor] = useState([255, 255, 255])

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

	useEffect(() => {
		if (shoeRef.current) {
			shoeRef.current.onload = () => {
				const cThief = new ColorThief();
				const res = cThief.getColor(shoeRef.current, 100)
				setBgColor(res)
			}
		}
	})


  return (
	<div className={`border-2 rounded-xl ${bigShoe === img ? "border-coral-red" : "border-transparent"} pointer-cursor`}
	 onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>

		<div className="flex justify-center items-center object-contain bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm p-4" style={{backgroundColor: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`}}>
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