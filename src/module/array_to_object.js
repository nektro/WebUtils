export function array_to_object(names,values) {
    return names.reduce(function(acc, val, i) {
        acc[val] = values[i];
        return acc;
    }, {});
}
