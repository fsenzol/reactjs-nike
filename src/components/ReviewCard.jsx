import { useEffect, useRef } from "react";
import {star} from "../assets/icons/index.js";
import gsap from "gsap";

const ReviewCard = ({imgURL, cusName, rating, feedback}) => {
	
	const starRef = useRef()

	useEffect (() => {
		gsap.to(starRef.current,{
			rotateZ: 360,
			repeat: -1,
			duration: 2,
			ease: 'linear',
		})
	})

	return (
		<div className="flex justify-center items-center gap-1 flex-col padding">
			<img src={imgURL} alt={"customer"} className={"object-cover w-[120px] h-[120px] rounded-full"}
			/>
			<p className={"font-montserrat leading-normal text-2xl font-semibold "}>{cusName}</p>
			<p className={"text-center text-lg info-text mt-1"}>{feedback}</p>
			<div className={"flex flex-row gap-1 justify-center items-center"}>
				<img ref={starRef} src={star} width={24} height={24} alt={"star"} className={"object-contain m-0"}/>
				<p className={"font-montserrat "}>({rating})</p>
			</div>
		</div>
	)
}

export default ReviewCard