import React, { useState } from 'react';
import { createRule } from '../services/api';

const RuleForm = () => {
    const [ruleString, setRuleString] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createRule(ruleString);
        setMessage(result.message);
    };

    return (
        <div>
            <h2>Create Rule</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={ruleString} 
                    onChange={(e) => setRuleString(e.target.value)} 
                    placeholder="Enter rule, e.g., (age > 30 AND department = 'Sales')"
                />
                <button type="submit">Create Rule</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RuleForm;
