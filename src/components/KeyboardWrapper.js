import React, {  useEffect} from 'react'
import KeyboardRU from './KeyboardRU'

const KeyboardWrapper = () => {
    const keyPressing = (e) => {
        const colorRect = "#35587C"
        const colorText = "#9ABADB"

        console.log(e.keyCode);
        const svgElemRect = document.getElementById(e.keyCode).getElementsByTagName('rect')[0]
        const svgElemPaths = document.getElementById(e.keyCode).getElementsByTagName('path')
        svgElemRect.style.fill = colorRect
        svgElemPaths[0].style.fill = colorText
        if (svgElemPaths.length > 1) {
            svgElemPaths[1].style.fill = colorText
        }



    }
    const keyUnPressing = (e) => {

        console.log(e.keyCode);
        const svgElemRect = document.getElementById(e.keyCode).getElementsByTagName('rect')[0]
        const svgElemPaths = document.getElementById(e.keyCode).getElementsByTagName('path')
        svgElemRect.style.fill = 'white'
        svgElemPaths[0].style.fill = 'black'
        if (svgElemPaths.length > 1) {
            svgElemPaths[1].style.fill = 'black'
        }

    }





    useEffect(() => {

        document.addEventListener("keydown", keyPressing, false);
        document.addEventListener("keyup", keyUnPressing, false)
        return () => {
            document.removeEventListener("keydown", keyPressing, false);
            document.removeEventListener("keyup", keyUnPressing, false)
        };
    }, []);

    return (
        <>
            <KeyboardRU />
        </>
    )
}

export default KeyboardWrapper