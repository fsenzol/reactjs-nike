import {Button} from "../components/Button.jsx";

const Subscribe = () => {
    return (
        <section className={"max-container flex justify-between items-center max-lg:flex-col flex-row gap-10"} id={"contact-us"}>
            <h1 className={"text-4xl leading-[68px] break-words font-palanquin font-bold max-w-lg"}>Sign Up for <span
                className={"text-coral-red"}>Updates</span> & Newsletters</h1>
            <div className={"lg:max-w-[40%] w-full flex items-center max-sm:flex-col flex-row gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"}>
                <input type={"text"} placeholder={"subscribe@nike.com"} className={"input"}/>
                <div className={"flex max-sm:justify-end items-center max-sm:w-full"}>
                    <Button label={"Sign Up"} fullWidth/>
                </div>
            </div>
        </section>
    )
}

export default Subscribe