import { useState } from "react"
import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants/index"



const Nav = () => {


	const [menuOpen, setMenuOpen] = useState(false)

	const handleMenuOpen = () => {
		setMenuOpen(last => !last)
	}

	return (
		<div >
			<header className="padding-x py-8 absolute z-10 w-full">
				<nav className="flex justify-between items-center max-container">
					<a href="/">
						<img src={headerLogo} alt="logo" width={130} height={29} />
					</a>

					<ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
						{navLinks.map(({ label, href }, index) => (
							<li key={index}>
								<a href={href} className="font-montserrat leading-normal font-bold text-lg text-slate-gray hover:text-coral-red focus:text-green-600">
									{label}
								</a>
							</li>
						))}
					</ul>
					<div className="max-lg:block hidden">
						<img src={hamburger}
							alt="hamburger"
							width={25}
							height={25} 
							onClick={handleMenuOpen}/>
					</div>
				</nav>

			</header>


			{menuOpen && (<div className="ring-1 pt-20 pb-10 w-full flex flex-col z-20 rounded-sm bg-slate-100">
					<ul className="gap-4 flex justify-center items-center flex-col">
						{navLinks.map(({ label, href }, index) => (
							<li key={index}>
								<a href={href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red focus:text-green-600">
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>)}
		</div>
	)
}

export default Nav