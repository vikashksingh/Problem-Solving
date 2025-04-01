var tree = [1,2,3,4];

function preorder(id, arr=[]){
    if(id > tree.length-1) return;

    console.log(tree[id]);
    preorder(left(id));
    preorder(right(id));
}

function inorder(id, arr=[]){
    if(id > tree.length-1) return arr;

    inorder(left(id),arr);
    arr.push(tree[id]);
    inorder(right(id),arr);
    return arr;
}

function left(id){
    return 2*id + 1;
}

function right(id){
    return 2*id + 2;
}

// console.log(preorder(0))
// preorder(0)
console.log(inorder(0));