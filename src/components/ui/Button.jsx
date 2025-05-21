import React from 'react';

const Button = ({ label, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="btn btn-secondary text-base-100 rounded">
            {label}
        </button>
    );
};

export default Button;