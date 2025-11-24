import { useState } from 'react';
import '/src/components/Form/Form.css'

export default function Form({ fields, onSubmit, renderSubmitButton }) {
    const [values, setValues] = useState(
        fields.reduce((acc, f) => ({ ...acc, [f.name]: f.defaultValue || '' }), {})
    );
    const [errors, setErrors] = useState({});


    const validateField = (field, value) => {
        if (field.validate) {
            return field.validate(value, values) || '';
        }
        if (field.required && !value.trim()) {
            return `${field.label} is required.`;
        }
        return '';
    };

    const validateAllFields = () => {
        const formErrors = {};
        fields.forEach(f => {
            const error = validateField(f, values[f.name]);
            if (error) formErrors[f.name] = error;
        });
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e, field) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        if (field.validateOnChange) {
            const error = validateField(field, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (validateAllFields()) {
            onSubmit(values);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(f => (
                <div key={f.name} className="form-field">
                    <label>{f.label}</label>
                    <input
                        type={f.type || 'text'}
                        name={f.name}
                        value={values[f.name]}
                        onChange={(e) => handleChange(e, f)}
                        placeholder={f.placeholder || ''}
                    />
                    {errors[f.name] && <p className="error">{errors[f.name]}</p>}
                </div>
            ))}
            {renderSubmitButton && renderSubmitButton()}
        </form>
    );

}
