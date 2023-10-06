import axios from "axios"
import {api} from "../config"

const instance = axios.create({
	baseURL: api.base,
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer " + localStorage.getItem("QTOKEN"),
	},
})

export default instance
