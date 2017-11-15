import React, {Component} from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
momentLocalizer(Moment);


export const renderField = (field) => {
    const { input, label, type, meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
        <div className={className}>
            <label>{label}</label>
            <input className="form-control" {...input}  type={type} />
            <div className="text-help">
                {touched ? error : ""}
            </div>
        </div>
    );
};

export const renderTextarea = (field) =>{
    const { input, label, type, meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
        <div className={className}>
            <label>{label}</label>
            <textarea className="form-control" type="text" {...input} />
            <div className="text-help">
                {touched ? error : ""}
            </div>
        </div>
    );
}

export const renderDateTimePicker = (field) =>{
    const { input: { onChange, value }, showTime, label,meta: { touched, error } } = field;

    return (
        <div className={`form-group`}>
            <label>{label}</label>
            <DateTimePicker
                onChange={onChange}
                format="MMMM DD, YYYY h:mm A"
                time={showTime}
                value={!value ? null : new Date(value)}
            />
            <div className="text-help">
                {touched ? error : ""}
            </div>
        </div>

    )
};

export const renderSelect  = (field) => {
    const { input, label, type, data, meta: { touched, error } } = field;
    return (
        <div className="form-group">
            {/* <label htmlFor={label}>{label}</label> */}
            <label>{label}</label>
            <select {...input} className="form-control">

                { Array.isArray(data) ?
                    //if data is not array it should be an object
                    data.map(function(d){
                        return   <option key={d} value={d}>{d}</option>
                    }) :
                    _.map(data,function(d,key){
                        return   <option key={key} value={d}>{d}</option>
                    })
                }
            </select>
            <div className="text-help">
                {touched ? error : ""}
            </div>
        </div>
    );

}