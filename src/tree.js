function tree(obj, level = 0) {
    const start  = level === 0 ? '' : level === 1 ? '├─' : '│'
    const whitespace = ' '.repeat(Math.max(0, level - 1));
    const nextBranch  = level > 1 ? '└──' : ''
    const treeLine  = `${start}${whitespace}${nextBranch}${obj.name}`

    if (obj.name) {
        console.log(treeLine)
    }

    if (obj.items) {
        obj.items.forEach(item => tree(item, level + 1))
    }
}


const obj = {
    "name": 1,
    "items": [{
        "name": 2,
        "items": [{ "name": 3 }, { "name": 4 }]
    }, {
        "name": 5,
        "items": [{ "name": 6 }]
    }]
};

tree(obj);
