import { useState } from "react"
import { contactUsApiCall } from "../../../api/api"

export const useContactForm = () => {

    // use states
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        message:""
    })
    const [loading, setLoading] = useState(false)

    // functions
    const handleInputChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e)=>{
        setLoading(true);
        e.preventDefault()
        
        const response = await contactUsApiCall(formData);

        if (response.success){
            console.log(response.message)
        }
        else{
            console.error(response.message)
        }

        setLoading(false)
    }

  return {formData, handleInputChange, handleFormSubmit, loading}
}
