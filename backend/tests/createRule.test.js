const { createRule } = require('./ruleEngine');

describe('Rule Creation and Parsing', () => {
    test('Parses simple rule correctly', () => {
        const ruleString = "(age > 30 AND department = 'Sales')";
        const ast = createRule(ruleString);
        expect(ast).toEqual({
            type: 'operator',
            value: 'AND',
            left: { type: 'operand', field: 'age', operator: '>', value: 30 },
            right: { type: 'operand', field: 'department', operator: '=', value: 'Sales' }
        });
    });

    test('Parses complex rule with OR operator', () => {
        const ruleString = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing'))";
        const ast = createRule(ruleString);
        expect(ast).toHaveProperty('type', 'operator');
        expect(ast.left.left).toHaveProperty('field', 'age');
        expect(ast.right.right).toHaveProperty('value', 'Marketing');
    });
});
