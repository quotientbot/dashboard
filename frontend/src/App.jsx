import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../src/pages/Home"
import Contact from "../src/pages/Contact"
import Premium from "../src/pages/Premium"
import Login from "./pages/Login"
import RefundPolicy from "./pages/RefundPolicy"
import Terms from "./pages/Terms"
import PolicyP from "./pages/PolicyP"
import { AnimatePresence } from "framer-motion"
import SmoothScroll from "./components/layouts/SmoothScroll"
import ErrorPage from "./pages/ErrorPage"

function App() {
  const location = useLocation();
  return (
    <SmoothScroll>
      <div className="root bg-black text-white">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} ></Route>
            <Route path="*" element={<ErrorPage msg = {"Page Not Found"} />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/premium" element={<Premium />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/policy/refund" element={<RefundPolicy />} ></Route>
            <Route path="/policy" element={<PolicyP />} ></Route>
            <Route path="/terms" element={<Terms />} ></Route>
          </Routes>

        </AnimatePresence>
      </div>
    </SmoothScroll>
  )
}

export default App
