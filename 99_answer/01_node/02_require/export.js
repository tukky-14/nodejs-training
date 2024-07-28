// ### 問題1：モジュールのエクスポート

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a + b;
}

function sub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a - b;
}

function mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a * b;
}

function div(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a / b;
}

function mod(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a % b;
}

module.exports = {
    add,
    sub,
    mul,
    div,
    mod,
};
