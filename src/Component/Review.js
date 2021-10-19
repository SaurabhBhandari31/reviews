import React, { useState } from 'react'
import reviews from './Data';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";

function Review() {
    const [index, setIndex] = useState(0)
    const { id, name, img, job, text } = reviews[index];
    const cheackNum = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;

    }
    const rendomnum = () => {
        let randomvalue = Math.floor(Math.random() * reviews.length);
        if (randomvalue === index) {

            randomvalue = index + 1;
        }
        setIndex(cheackNum(randomvalue));
    }
    const nextperson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return cheackNum(newIndex);
        })
    }

    const preperson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return cheackNum(newIndex);
        })

    }
    return (
        <div>
            <div className="card design mt-5">
                <img src={img} alt={name} className="img-fluid mt-3 image" />
                <h3 className="text-center mt-1">{name} <FcApproval className="size" /></h3>
                <h6 className="text-center mt-1">{job}</h6>
                <p className="text-center mt-2">{text}</p>
                <div class="d-grid gap-2 d-md-block text-center">
                    <button class="btn btn-outline-primary" onClick={preperson}><AiOutlineLeft /></button>
                    <button class="btn btn-outline-primary button" onClick={nextperson}><AiOutlineRight /></button>
                </div>
                <button className="btn btn-primary mt-3" onClick={rendomnum}>RENDOM</button>

            </div>

        </div>
    )
}

export default Review;
