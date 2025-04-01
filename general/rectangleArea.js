/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let cx1,cy1,cx2,cy2;
    if((bx2 >= 0 && ax2 >= 0) || (bx2 <= 0 && ax2 <= 0)) cx1 = bx2 > ax2 ? ax2 : bx2;
    if((by2 >= 0 && ay2 >= 0) || (by2 <= 0 && ay2 <= 0)) cy1 = by2 > ay2 ? ay2 : by2;
    if((bx1 >= 0 && ax1 >= 0) || (bx1 <= 0 && ax1 <= 0)) cx2 = bx1 > ax1 ? ax1 : bx1;
    if((by1 >= 0 && ay1 >= 0) || (by1 <= 0 && ay1 <= 0)) cy2 = by1 > ay1 ? ay1 : by1;

    let A1 = ((ax2-ax1) * (ay2-ay1)) + ((bx2-bx1) * (by2-by1));
    let C = ((cx1+cx2) * (cy1+cy2));
    return A1 - C;
};

computeArea(-3,0,3,4,0,-1,9,2);