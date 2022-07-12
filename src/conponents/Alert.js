import React from 'react'

export default function Alert(props) {

    const capitalized = (word)=> {
        let lower = word.toLowerCase();
        let capital = lower.charAt(0).toUpperCase() + lower.slice(1);
        
        return capital;
    }

  return (
    props.alert && <div className="container my-4">
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)} </strong> {props.alert.msg}
        </div>
    </div>
  )
}
