import NavBar from "../components/NavBar";
import Inner from "../components/layouts/Inner";
import logo from "../assets/logo192.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Footer from "../components/home/Footer";
import { FaArrowRight } from "react-icons/fa";

const RefundPolicy = () => {
	return (
		<div className="bg-black text-white min-h-screen w-full flex flex-col">
			<Inner>
				<div className="flex mt-1">
					<motion.div
						initial={{ x: "-20vw" }}
						animate={{ x: 0 }}
						transition={{ duration: 1 }}
						className="lg:w-[10vw] w-[20vw] lg:h-[7vh] flex justify-center items-center"
					>
						<NavLink to={"/"}>
							<img src={logo} alt="Logo" className="logo-animation lg:scale-[0.4] scale-[0.7]" />
						</NavLink>
					</motion.div>
					<NavBar />
				</div>

				<div className="flex-grow overflow-y-auto">
					<div className="h-auto w-[80vw] ml-[10vw] lg:mt-[15vh] mt-4 lg:text-2xl cursor-default text-xl text-justify">
						<div className="pl-5 my-8">
							{/* <h1 style={{ textAlign: 'left' }}>Privacy</h1> */}
							<h1
								className="text-4xl  font-bold text-[#06F5B6] hover:underline underline-offset-4 relative group tracking-wide text-center mb-8"
								style={{ textAlign: "left" }}
							>
								We Have a Strict No Refunds Policy!
							</h1>
							<p>
								{" "}
								We do not provide refunds for services purchased on our web dashboard or through our
								Discord Bot. By making a purchase, you acknowledge and agree to this policy.
							</p>

							<h1
								className="text-4xl  font-bold text-[#06F5B6] hover:underline underline-offset-4 relative group tracking-wide text-center mb-8 mt-6 "
								style={{ textAlign: "left" }}
							></h1>
							<p>
								{" "}
								We recommend that you carefully read all service descriptions and consider your purchase
								decision before completing a transaction. If you have any questions or concerns about our
								products or services, please feel free to contact us through our Support Server before
								making a purchase.
							</p>

							<h1
								className="text-3xl font-bold tracking-wide text-center mb-8 mt-12"
								style={{ textAlign: "left" }}
							></h1>
							<p>
								{" "}
								If you experience any issues with our products or services, please contact us and we will
								do our best to resolve the issue to your satisfaction. However, please note that we do not
								provide refunds for any reason.
							</p>

							<h1
								className="text-4xl  font-bold text-[#06F5B6] hover:underline underline-offset-4 relative group tracking-wide text-center mb-8 mt-6 "
								style={{ textAlign: "left" }}
							></h1>
							<p>
								We reserve the right to amend or modify this refund policy at any time without prior
								notice. By continuing to use our web dashboard after any modifications or updates to this
								policy, you agree to be bound by the updated refund policy..
							</p>
						</div>
					</div>
				</div>

				<div className="w-full h-[2px] bg-[#06F5B6] mt-4"></div>
				<Footer />
			</Inner>
		</div>
	);
};

export default RefundPolicy;
