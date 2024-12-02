import Hero from './section/Hero'
import PopularProducts from './section/PopularProducts'
import SpecialOffer from './section/SpecialOffer'
import CustomerReview from './section/CustomerReview'
import Footer from './section/Footer'
import Services from './section/Services'
import Nav from './section/Nav.jsx'
import SuperQuality from './section/SuperQuality'
import Subscribe from "./section/Subscribe.jsx";

function App() {

  return (
    <main className='relative'>
        <Nav />

        <section className='xl:padding-l wide:padding-r padding-b'>
            <Hero/>
        </section>

        <section className='padding'>
            <PopularProducts />
        </section>

        <section className='padding'>
            <SuperQuality />
        </section>

        <section className='padding-x'>
            <Services/>
        </section>

        <section className='padding'>
            <SpecialOffer />
        </section>

        <section className='padding bg-slate-100'>
            <CustomerReview />
        </section>

        <section className='padding'>
            <Subscribe />
        </section>

        <section className='padding-x padding-t bg-black'>
            <Footer />
        </section>

    </main>
  )
}

export default App
