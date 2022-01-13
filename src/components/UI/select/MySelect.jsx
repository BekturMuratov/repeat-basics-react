import React from 'react'

export default function MySelect({option, defaultValue, value, onChange}) {
    return (
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled>{defaultValue}</option>
            {option.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
        </select>
    )
}
