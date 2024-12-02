export const Button = ({label, iconUrl, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-5 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white ${fullWidth && "w-full"}`}>
        {label}
		{ iconUrl && <img src={iconUrl} alt="arrow-right" className={"ml-2 rounded-full w-5 h-5"}/> }
    </button>

  )
}
