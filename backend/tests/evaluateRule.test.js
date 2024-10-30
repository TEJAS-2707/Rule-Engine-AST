const { evaluateRule } = require('./ruleEngine');

describe('Rule Evaluation', () => {
    test('Evaluates rule with AND operator correctly', () => {
        const ast = {
            type: 'operator',
            value: 'AND',
            left: { type: 'operand', field: 'age', operator: '>', value: 30 },
            right: { type: 'operand', field: 'department', operator: '=', value: 'Sales' }
        };
        const data = { age: 35, department: 'Sales' };
        const result = evaluateRule(ast, data);
        expect(result).toBe(true);
    });

    test('Evaluates rule with OR operator correctly', () => {
        const ast = {
            type: 'operator',
            value: 'OR',
            left: { type: 'operand', field: 'salary', operator: '>', value: 50000 },
            right: { type: 'operand', field: 'experience', operator: '>', value: 5 }
        };
        const data = { salary: 30000, experience: 6 };
        const result = evaluateRule(ast, data);
        expect(result).toBe(true);
    });

    test('Fails when data does not match rule', () => {
        const ast = {
            type: 'operator',
            value: 'AND',
            left: { type: 'operand', field: 'age', operator: '>', value: 30 },
            right: { type: 'operand', field: 'department', operator: '=', value: 'Sales' }
        };
        const data = { age: 25, department: 'Marketing' };
        const result = evaluateRule(ast, data);
        expect(result).toBe(false);
    });
});
