import { links } from '../utils/axios/config';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Core/Loader';
import React from 'react'
import axios from '../utils/axios/axios'


const useQuery = () => {
	return new URLSearchParams(useLocation().search)
}

const Login = ({onToken}) => {
    
    const query = useQuery()
	let code = query.get("code") ?? null
    const lastlocation = localStorage.getItem("_q_last_page") ?? links.home
    const qtoken = localStorage.getItem("QTOKEN") ?? null

    qtoken !== null && code === null && (window.location.href = lastlocation)

    const getToken = async(code) => {
        axios
			.get("/oauth?code=" + code)
			.then((res) => {
                console.log(res)
				if (res.status === 200) {
					if (res.statusText === "OK") {
						onToken({
							token: res.data.access_token,
						})
						window.location.href = links.home
					}
				} else {
					// console.log(res.data)
				}
			})
			.catch((err) => {})
  
    }

    const ExchangeToken = ({code}) => {
        getToken(code);
        return <><Loader/></>
    }

    // Loaders should be part of the component rendering, not returned from a function
    return (
        <>
            {code == null ?  <GetCode /> :<ExchangeToken code={code}/> }
        </>
    )
}


const GetCode = () => {

    // localStorage.clear()

    const query = useQuery();
    const prompt = !!query.get('noprompt');
    localStorage.setItem("_q_last_page", links.home);
    window.location.href = prompt ? links.oauth : links.no_prompt_auth;
    

	return (
		<>
			<Loader full />
		</>
	)
}





export default Login



