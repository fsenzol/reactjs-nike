import ReviewCard from "../components/ReviewCard.jsx";
import {reviews} from "../constants/index.js";

export const CustomerReview = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin m-auto text-center text-4xl font-bold">What are <span className="text-coral-red">Customers</span></h3>
            <p className="info-text mt-4 max-w-lg text-center m-auto">Hear genuine stories from our customers, about exceptional experiences with us :P</p>
            <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14 items-center">
                {
                    reviews.map((review, index) => (
                        <ReviewCard key={index} imgURL={review.imgURL} cusName={review.customerName} feedback={review.feedback}
                            rating={review.rating}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default CustomerReview