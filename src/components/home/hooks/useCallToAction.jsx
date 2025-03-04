import { useState } from "react"
import { getYourDeviceNowApiCall } from "../../../api/api"

export const useCallToAction = () => {

    // use states
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        phone:""
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
        
        const response = await getYourDeviceNowApiCall(formData);

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
