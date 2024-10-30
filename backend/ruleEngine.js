// backend/ruleEngine.js

function evaluateRule(ast, data) {
    if (ast.type === "operand") {
        const { field, operator, value } = ast;
        switch (operator) {
            case ">": return data[field] > value;
            case "<": return data[field] < value;
            case "=": return data[field] === value;
            default: return false;
        }
    } else if (ast.type === "operator") {
        if (ast.operator === "AND") {
            return evaluateRule(ast.left, data) && evaluateRule(ast.right, data);
        } else if (ast.operator === "OR") {
            return evaluateRule(ast.left, data) || evaluateRule(ast.right, data);
        }
    }
    return false;
}

module.exports = evaluateRule;
