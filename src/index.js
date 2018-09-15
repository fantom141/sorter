class Sorter {

    constructor() {
        this.array = [];
        this.compareFunction;
    }

    add(element) {
        if (typeof element === 'object') {
            this.convertObjectType(element)
        } else if (typeof element === 'symbol') {
            this.addToArray(element);
        } else if (typeof Number(element) === 'number') {
            this.addToArray(element);
        }
    }

    convertObjectType(el) {
        if (el instanceof Number) {
            el = el.toPrimitive;
        }
        this.addToArray(el);
    }

    addToArray(el) {
        this.array.push(el);
    }

    at(index) {
        return this.array[index]
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        if (typeof this.compareFunction ==='function') {
          return this.compareFunctionSorting(indices);
        } else {
          return this.defaultSorting(indices);
        }
    }

    defaultSorting(indices) {
        return this.array.sort((a, b) => {
            const aIdx = this.array.indexOf(a);
            const bIdx = this.array.indexOf(b);

            if (indices.includes(aIdx && bIdx)) {
                return a - b
            }

            return;
        });
    }

    compareFunctionSorting(indices) {
        return this.array.sort((a, b) => {
            const aIdx = this.array.indexOf(a);
            const bIdx = this.array.indexOf(b);

            if (indices.includes(aIdx) && indices.includes(bIdx)) {
                return this.compareFunction.call(this, a, b);
            }

            return;
        })
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;