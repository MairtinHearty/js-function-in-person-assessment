var fn = {}

fn.tenThousand = function() {
    var arr = []
    for (var i = 1; i < 10001; i++) {
        arr.push(i)
    }
    return arr
}

fn.threeHundred = function() {
    var arr = []
    for (var i = 1; i < 301; i++) {
        if (i % 3 === 0) {
            arr.push(i)
        }
    }
    return arr
}

fn.alphaObject = function() {
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }
}

fn.multiplyArr = function(arr) {
    if (arr.length > 0) {
        var total = 1
        for (var i = 0; i < arr.length; i++) {
            total = total * arr[i]
        }
    } else {
        total = []
    }
    return total
}

fn.arrObj = function(arr) {
    var obj = {}
    if (arr.length > 0) {
        var arr2 = []
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i]; j++) {
                arr2.push('')
            }
            obj[arr[i]] = arr2
            arr2 = []
        }
    } else {
        return {}
    }
    return obj
}

fn.wordLengths = function(str) {
    var strSplit = str.split(' ')
    var arr = []
    if (str.length > 0) {
        for (var i = 0; i < strSplit.length; i++) {
            num = strSplit[i].length
            arr.push(num)
        }
        return arr
    } else {
        return []
    }
}
fn.getTimesTen = function() {
    return function(num) {
        return num * 10
    }
}

fn.getFooBar = function(str) {
    return function(str) {
        return 'Foo' + str + 'Bar'
    }


};

module.exports = fn;
