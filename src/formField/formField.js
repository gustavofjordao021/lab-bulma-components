import React from 'react';

const FormField = props => {
    return (
        <>
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div class="control">
                <input class="input" type="text" placeholder={props.placeholder}/>
            </div>
        </div>
        </>
    );
};

export default FormField;