// backend/ast.js

class ASTNode {
    constructor(type) {
        this.type = type;
    }
}

class ComparisonNode extends ASTNode {
    constructor(field, operator, value) {
        super("operand");
        this.field = field;
        this.operator = operator;
        this.value = value;
    }
}

class LogicalNode extends ASTNode {
    constructor(operator, left = null, right = null) {
        super("operator");
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}

module.exports = { ASTNode, ComparisonNode, LogicalNode };
