// ### 問題1：モジュールのエクスポート
const add = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a + b;
};

const sub = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a - b;
};

const mul = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a * b;
};

const div = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a / b;
};

const mod = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a % b;
};

export { add, sub, mul, div, mod };
