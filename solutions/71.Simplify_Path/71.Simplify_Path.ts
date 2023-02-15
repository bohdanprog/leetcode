function simplifyPath(path: string): string {
    let stack = []

    for(let point of path.split('/')) {
        if(point === '..'){
            if(stack) {
                stack.pop()
            }
        } else if (point == '.' || !point) {
            continue
        } else {
            stack.push(point)
        }
    }
    return "/" + stack.join('/')
};