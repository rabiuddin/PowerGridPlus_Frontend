import { useState } from "react"
import { loginApiCall } from "../../../api/auth.api"

export const useLogin = () => {

    // use states
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    // functions
    const handleInputChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e)=>{
        setLoading(true);
        e.preventDefault()
        
        const response = await loginApiCall(formData);

        if (response.success){
            console.log(response.message)
        }
        else{
            console.error(response.message)
        }

        setLoading(false)
    }

  return {formData, handleInputChange, handleLogin, loading,showPassword, setShowPassword}
}
