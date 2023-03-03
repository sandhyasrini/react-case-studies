import React, { useCallback } from 'react'
import { useState } from 'react'
import '../../styles/Landing.css'
import Autocomplete from '../blocks/Autocomplete';
import sendData, { debounce } from '../../utils/util';


function Landing() {
    const [autoComplete, setAutoComplete] = useState([]);
    const [value, setValue] = useState()

    function appendDatatoDropdown(myvalue) {
        console.log('setting te value')
        setAutoComplete([])
        sendData().then((val) => {
            val.forEach((element) => {
                if (myvalue.length && element.name.toLowerCase().substring(0, myvalue.length) === myvalue.toLowerCase())
                    setAutoComplete(oldArray => [...oldArray, element])
            })
        })
    }

    function handleChange(e) {
        appendDatatoDropdown(e.target.value)
    }
    const debouncedChangeHandler = useCallback(
        debounce(handleChange, 500), [])

    return (
        <div>
            <h1>
                Search for products
            </h1>
            <input type="search" onChange={debouncedChangeHandler} value = {value} className='py-2  border border-gray-800' />
            <Autocomplete data={autoComplete} />
        </div>
    )
}

export default Landing