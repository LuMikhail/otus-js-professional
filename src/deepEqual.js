function deepEqual(obj1, obj2, path = '') {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        if (obj1 !== obj2) {
            console.log(`Error: Values at ${path || 'the same path'} are different: ${obj1} !== ${obj2}`);
            return false;
        }
        return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        console.log(`Error: ${path ? `Different number of keys at ${path}` : 'Objects have different number of keys'}`);
        return false;
    }

    for (const key of keys1) {
        if (!deepEqual(obj1[key], obj2[key], path ? `${path}.${key}` : key)) {
            return false;
        }
    }
    // do not duplicate the output to the console
    if (!path) {
        console.log('Objects are equal');
    }

    return true;
}

const obj1 = {
    a: {
        b: 1,
    },
};
const obj2 = {
    a: {
        b: 2,
    },
};
const obj3 = {
    a: {
        b: 1,
    },
};

deepEqual(obj1, obj1); // OK
deepEqual(obj1, obj2); // Error: Values at a.b are different: 1 !== 2
deepEqual(obj1, obj3); // OK
