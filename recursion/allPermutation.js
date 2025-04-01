// function allPermutation(str,perm){
//     if(!str && perm){
//         return [perm];
//     }
//     let allPerms = [];
//     let localPerm = [];
//     for (let i = 0; i <= perm.length; i++){
//         let tempPerm;
//         if (i == 0) tempPerm = str[0] + perm;
//         else tempPerm = perm.substring(0,i) + str[0] + perm.substring(i); 
//         localPerm = allPermutation(str.substring(1), tempPerm);
//         allPerms = [...allPerms,...localPerm];
//     }
//     return allPerms;
// }
// console.log(allPermutation('abc',''))

var permute = function(nums, perm) {
    if(!nums.length && perm.length){
        return [perm];
    }
    let allPerms = [];
    let localPerm = [];
    for (let i = 0; i <= perm.length; i++){
        let tempPerm;
        if (i == 0) tempPerm = [nums[0],...perm];
        else tempPerm = [...perm.slice(0,i), nums[0] , ...perm.slice(i)]; 
        localPerm = permute(nums.slice(1), tempPerm);
        allPerms = [...allPerms,...localPerm];
    }
    return allPerms;
    
};

console.log(permute(['a','b','c'],[]))