import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png"
export default function Footer(){
    const FooterLinks = [
        {
            title:"About",
            path:"/#"
        },
        {
            title:"Premium",
            path:"/#"
        },
        {
            title:"Vote",
            path:"/#"
        },
        {
            title:"Support",
            path:"/#"
        },
        {
            title:"T&C",
            path:"/#"
        },
        {
            title:"Privacy Policy",
            path:"/#"
        },
    ]
    return (
        <div className="min-h-[200px] flex items-center justify-center bg-[#161616]">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center">
                    <div className="text-2xl flex gap-2 items-center">
                        <img src={logo} alt=""  className="h-20 w-20"/>
                        <span>Quotient</span>
                    </div>
                    <div>
                    Copyright © 2023 | Quotient
                    </div>
                </div>
                <div className="flex gap-4">
                    {
                        FooterLinks.map((item,i) => (
                            <Link key={i} to={item.path}>
                                {item.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}