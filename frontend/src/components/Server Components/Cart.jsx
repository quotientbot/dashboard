import React from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {IoMdRadioButtonOn} from "react-icons/io";
import {FiEdit} from "react-icons/fi";

const Cart = () => {
    return (
        <div className="border-2 rounded-lg p-3 max-w-[300px] space-y-3">
            <div className="flex justify-between">
                <span>
                    #register-here
                </span>
                <RiDeleteBin6Line/>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <span>Quotient-Scrims</span>
                    <span>Time - 10.00 Am</span>
                    <span>ID - 2023</span>
                </div>
                <div className="flex gap-3">
                    <IoMdRadioButtonOn/>
                    <FiEdit/>
                </div>
            </div>
        </div>
    )
}

export default Cart;