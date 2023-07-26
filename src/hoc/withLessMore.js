import {  useCallback, useState } from "react"

export const withLessMore = (Component) =>{
    return (props) =>{
        const [isShow,setIsShow] = useState()

        const toggleToShow = useCallback(() => {
            setIsShow(true)
        },[])

        return (
            <Component {...props} {...{isShow,toggleToShow}}/>
        )
    }
}