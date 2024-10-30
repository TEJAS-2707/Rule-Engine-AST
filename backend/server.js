// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const Rule = require('./models/Rule');
const parseRule = require('./ruleParser');
const evaluateRule = require('./ruleEngine');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Create Rule Endpoint
app.post('/api/create-rule', async (req, res) => {
    const { ruleString, ast } = req.body;

    try {
        const newRule = new Rule({ ruleString, ast });
        await newRule.save();
        res.json({ message: 'Rule created', ruleId: newRule._id });
    } catch (error) {
        res.status(500).json({ error: 'Error saving rule to database' });
    }
});

// Evaluate Rule Endpoint
app.post('/api/evaluate', async (req, res) => {
    const { ruleId, data } = req.body;
    const rule = await Rule.findById(ruleId);
    if (!rule) return res.status(404).json({ message: "Rule not found" });
    const isEligible = evaluateRule(rule.ast, data);
    res.json({ isEligible });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
