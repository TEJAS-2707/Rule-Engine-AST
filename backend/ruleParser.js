// backend/ruleParser.js

const { ComparisonNode, LogicalNode } = require('./ast');

function parseRule(ruleString) {
    // Example parsing logic to convert rule string to AST
    // Placeholder implementation - use an actual parsing method for complex rules
    return new LogicalNode(
        "AND",
        new ComparisonNode("age", ">", 30),
        new LogicalNode(
            "OR",
            new ComparisonNode("department", "=", "Sales"),
        )
    );
}

module.exports = parseRule;
