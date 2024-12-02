import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

const Footer = () => {
  return (
      <footer className={"max-container"}>
          <div className={"flex justify-between flex-wrap pb-10"}>

              <div className={"space-y-6"}>
                  <a>
                      <img src={footerLogo} alt={"nike"}/>
                  </a>

                <p className={"info-text max-w-sm font-palanquin"}>Get shoes ready for the new term at your nearest Nike store. Find your perfect Size in Store. Get rewards</p>

                <div className={"flex flex-row gap-4"}>
                  {socialMedia.map((img, i) => (
                      <div key={i} className={"rounded-full p-2.5 flex bg-white justify-center items-center"}>
                          <img src={img.src} alt={img.alt} className={"object-contain"}/>
                      </div>
                  ))}
                </div>
              </div>

            {footerLinks.map((link, i) => (
                <div key={i} className={"items-center justify-center max-sm:pt-5"}>
                    <h3 className={"text-3xl text-slate-50 font-palanquin"}>{link.title}</h3>
                    <div className={"flex flex-col my-2"}>
                      {link.links.map((l, i) => (
                        <a key={i} href={l.link}>
                          <p className={"info-text hover:text-coral-red font-montserrat"}>{l.name}</p>
                        </a>
                      ))}
                    </div>
                </div>
            ))}

          </div>
        <div className={"flex justify-between items-center max-container"}>
          <a className={"flex flex-row gap-2 cursor-pointer"}>
            <img src={copyrightSign} width={15} height={15} alt={"copyright"}/>
            <p className={"py-3 hover:text-coral-red text-sm text-slate-gray"}>Copyright. All rights reserved.</p>
          </a>
          <a className={"flex flex-row gap-2"}>
            <p className={"py-3 text-sm text-slate-gray hover:text-coral-red cursor-pointer"}>Terms & Conditions</p>
          </a>
        </div>

      </footer>
  )
}

export default Footer