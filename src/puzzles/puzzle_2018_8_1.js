class Node {
    constructor(metaData, children) {
        this.metaData = metaData;
        this.children = children;
    }

    getValue() {
        if (!this.children.length) {
            return this.metaData.reduce((acc, curr) => acc + curr, 0);
        } else {
            const sum = [];
            this.metaData.forEach(meta => {
                let index = meta - 1;
                if (this.children[index]) {
                    sum.push(this.children[index].getValue());
                }
            });

            return sum.reduce((acc, curr) => acc + curr, 0);
        }
    }
}

function execute(input) {
    input = input.split(' ').map(Number);


    const times = x => f => {
        if (x > 0) {
            f();
            times(x - 1)(f)
        }
    };

    const extractChildNodes = (body) => {
        let childrenAmount = body.shift();
        const metadataAmount = body.shift();
        const metaData = [];
        const children = [];
        while (childrenAmount > 0) {
            const [updatedBody, child] = extractChildNodes(body);
            children.push(child);
            body = updatedBody;
            childrenAmount--;
        }
        times(metadataAmount)(() => metaData.push(body.shift()));
        return [body, new Node(metaData, children)]
    };

    const [, result] = extractChildNodes(input);
    return result.getValue();
}

module.exports = execute;
