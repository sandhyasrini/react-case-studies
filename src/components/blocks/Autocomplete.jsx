import React from 'react'

function Autocomplete(props) {
    return (
        <section className={props.data && props.data.length > 0 ? 'block': 'hidden'}>
            {props.data.map(element =>
                <div key={element.id}>{element.name}</div>
            )}
        </section>
    )
}

export default Autocomplete