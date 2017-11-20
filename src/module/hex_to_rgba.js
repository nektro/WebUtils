/**
 */
export function hex_to_rgba(hex){
    const num = hex.substring(1);
    let res = [];
    if ([3,4].includes(num.length)) res = num.match(/[0-9a-f]{1}/g).map(v => parseInt(`0x${v}${v}`, 16));
    if ([6,8].includes(num.length)) res = num.match(/[0-9a-f]{2}/g).map(v => parseInt(`0x${v}`, 16));
    res = res.map(v => v / 255);
    if (res.length === 3) res.push(1.0);
    return res;
}
