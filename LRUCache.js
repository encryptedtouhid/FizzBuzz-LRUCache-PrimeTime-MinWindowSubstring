function LRUCache(strArr) {
    let cache = [];
    strArr.forEach(val => {
        if (!cache.includes(val)) {            
            if (cache.push(val) > 5) {
                cache.shift();
            }
        } else {
            cache.splice(cache.findIndex(cacheVal => val === cacheVal), 1);
            cache.push(val);
        }
    });

    return cache.join('-');

}

console.log(LRUCache(["A", "B", "C", "D", "A", "E", "D", "Z"]));