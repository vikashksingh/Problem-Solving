/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = ['+','-','*','/'];
    const stack = [];
    let i = 0;
    while(i < tokens.length){
        if(operators.indexOf(tokens[i]) != -1) {
            let a = parseInt(stack.pop());
            let b = parseInt(stack.pop());
            let res;
            switch(tokens[i]){
                case '+':
                    res = a + b;
                    break;
                case '*':
                    res = a * b;
                    break;
                case '-':
                    res = b - a;
                    break;
                case '/':
                    res = a && b/a;
                    res = res > 0 ? Math.floor(res) : Math.ceil(res);
                    break;    
            }
            stack.push(res);
        } else {
            stack.push(tokens[i]);
        }
        i++;
    }
    return stack[0];
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])