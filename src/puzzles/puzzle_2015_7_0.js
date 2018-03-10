function execute(input) {
    const commands = input.trim().split('\n');
    class Gate {
        constructor(input) {
            this.inputs = [];
            if (input.includes(' ')) {
                this.body = input.split(' ');
                this.type = (this.body.length === 3 ? this.body[1] : this.body[0]).trim();
            } else {
                this.type = 'COMMON';
                if (isNaN(parseInt(input))) {
                    this.body = [input];
                } else {
                    this.inputs.push(parseInt(input));
                }
            }
        }
        applyBitwiseNot(input) {
            function replaceAt(s, n, t) {
                return s.substring(0, n) + t + s.substring(n + 1);
            }
            let n = input.toString(2);
            n="0000000000000000".substr(n.length)+n;
            let result = "0000000000000000";
            for (let i = 0; i < n.length; i++) {
                let negative = n[i] == "0" ? "1" : "0";
                result = replaceAt(result, i, negative);
            }
            return  parseInt(result, 2);
        }
        addNodes(nodes) {
            if (nodes.length > 0) {
                this.inputs.push(...nodes);
            }
        }
        getParents() {
            switch (this.type) {
                case 'COMMON':
                    return this.body || [];
                case 'AND':
                case 'OR':
                    let parents = [], a = parseInt(this.body[0], 10), b = parseInt(this.body[2], 10);
                    !isNaN(a) ? this.inputs.push(new Gate(a.toString())) : parents.push(this.body[0]);
                    !isNaN(b) ? this.inputs.push(new Gate(b.toString())) : parents.push(this.body[2]);
                    return parents;
                case 'LSHIFT':
                case 'RSHIFT':
                    this.inputs[0] = parseInt(this.body[2], 10);
                    return [this.body[0]];
                case 'NOT':
                    return [this.body[1]];
            }
            return [];
        }
        getValue() {
            if (!this.cached) {
                switch (this.type) {
                    case 'COMMON':
                        this.cached = Number.isInteger(this.inputs[0]) ? this.inputs[0] : this.inputs[0].getValue();
                        break;
                    case 'AND':
                        this.cached = this.inputs[0].getValue() & this.inputs[1].getValue();
                        break;
                    case 'OR':
                        this.cached = this.inputs[0].getValue() | this.inputs[1].getValue();
                        break;
                    case 'LSHIFT':
                        this.cached = this.inputs[1].getValue() << this.inputs[0];
                        break;
                    case 'RSHIFT':
                        this.cached = this.inputs[1].getValue() >> this.inputs[0];
                        break;
                    case 'NOT':
                        this.cached = this.applyBitwiseNot(this.inputs[0].getValue());
                        break;
                }
            }
            return this.cached;
        }
    }

    const gates = {};
    commands.forEach(command => {
        const [input, output] = command.split('->').map(v => v.trim());
        if (gates[output]) {
            console.error(`${output} already exists`);
        }
        gates[output] = new Gate(input);
    });
    for (let g in gates) {
        gates[g].addNodes(gates[g].getParents().map(n => gates[n]));
    }
    return gates;
}
    
module.exports = execute;
