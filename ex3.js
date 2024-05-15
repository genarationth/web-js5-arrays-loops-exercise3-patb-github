// Non-nested version
function printTriangle(n) {
    let str = "*";
    for (let i = 1; i <= n; i++) {
        console.log(str);
        str += " *";
    }
}

printTriangle(5);

// Nested version - recreates the string from scratch each line
function printTriangleNested(n) {
    for (let i = 1; i <= n; i++) {
        let str = "*";
        for (let k = 0; k < i - 1; k++) {
            str += " *";
        }
        console.log(str);
    }
}

printTriangleNested(5);
