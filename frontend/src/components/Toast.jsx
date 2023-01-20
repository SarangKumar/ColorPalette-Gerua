import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { MdDone } from 'react-icons/md'
import '../css/toast.css'

const Toast = () => {

    useEffect(() => {

        const button = document.querySelector("button");
        const toast = document.querySelector(".toast");
        const closeIcon = document.querySelector(".close");
        const progress = document.querySelector(".progress");

        let timer1, timer2;

        button.addEventListener("click", () => {
            toast.classList.add("active");
            progress.classList.add("active");

            timer1 = setTimeout(() => {
                toast.classList.remove("active");
            }, 5000); //1s = 1000 milliseconds

            timer2 = setTimeout(() => {
                progress.classList.remove("active");
            }, 5300);
        });

        closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");

            setTimeout(() => {
                progress.classList.remove("active");
            }, 300);

            clearTimeout(timer1);
            clearTimeout(timer2);
        });
    })
    return (
        <>
            <div>
                <div className="toast">
                    <div className="toast-content">
                        {/* <i class="fas fa-solid fa-check check"></i> */}
                        <MdDone className="fas fa-solid fa-check check" />

                        <div className="message">
                            <span className="text text-1">Success</span>
                            <span className="text text-2">Your changes has been saved</span>
                        </div>
                    </div>
                    {/* <i class="fa-solid fa-xmark close"></i> */}
                    <RxCross2 className="fa-solid fa-xmark close" />

                    <div className="progress"></div>
                </div>
                <button className='toast-btn'>Show Toast</button>
            </div>
        </>
    )
}

export default Toast