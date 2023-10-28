import { links } from '../utils/axios/config';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Core/Loader';
import React from 'react'
import axios from '../utils/axios/axios'
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../state/actions/userSlice';



const useQuery = () => {
	return new URLSearchParams(useLocation().search)
}

const Login = () => {
    
    const query = useQuery()
	let code = query.get("code") ?? null
    const lastlocation = localStorage.getItem("_q_last_page") ?? links.home
    const qtoken = localStorage.getItem("QTOKEN") ?? null
    const dispatch = useDispatch();

    qtoken !== null && code === null && (window.location.href = lastlocation)

    const getToken = async(code) => {
        dispatch(loginStart());
        axios
			.get("/oauth?code=" + code)
			.then((res) => {
                console.log(res)
				if (res.status === 200) {
					if (res.statusText === "OK") {
                        console.log(res)
                        dispatch(loginSuccess({
                            token: res.data.user_token,
                        }));
                        localStorage.setItem("QTOKEN", res.data.user_token)
						window.location.href = links.home
					}
				} else {
                    dispatch(loginFailure());
                    window.location.href = links.home
				}
			})
			.catch((err) => {
                dispatch(loginFailure());
                window.location.href = links.home
            })
  
    }

    const ExchangeToken = ({code}) => {
        getToken(code);
        return <Loader/>
    }

    // Loaders should be part of the component rendering, not returned from a function
    return (
        <div>
            {code == null ?  <GetCode /> :<ExchangeToken code={code}/> }
        </div>
    )
}


const GetCode = () => {
    const query = useQuery();
    const prompt = query.get('prompt') ?? null;
    localStorage.setItem("_q_last_page", links.home);
    window.location.href = prompt=== null ? links.oauth : links.no_prompt_auth;
    

	return (
			<Loader full />
	)
}





export default Login



