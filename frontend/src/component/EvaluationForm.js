import React, { useState } from 'react';
import { evaluateRule } from '../services/api';

const EvaluationForm = () => {
    const [ruleId, setRuleId] = useState('');
    const [data, setData] = useState({});
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await evaluateRule(ruleId, data);
        setResult(response.isEligible);
    };

    return (
        <div>
            <h2>Evaluate Rule</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={ruleId} 
                    onChange={(e) => setRuleId(e.target.value)} 
                    placeholder="Enter Rule ID"
                />
                <textarea 
                    value={JSON.stringify(data)} 
                    onChange={(e) => setData(JSON.parse(e.target.value))} 
                    placeholder='{"age": 35, "department": "Sales", "salary": 50000}'
                />
                <button type="submit">Evaluate</button>
            </form>
            {result !== null && (
                <p>Result: {result ? "Eligible" : "Not Eligible"}</p>
            )}
        </div>
    );
};

export default EvaluationForm;
