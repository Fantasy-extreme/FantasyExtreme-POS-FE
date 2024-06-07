export function convertMotokoObject(obj: any) {
    obj[1] = Object.fromEntries(Object.entries(obj[1]).map(([key, value]) => [
        key,
        typeof value === 'bigint' ? Number(value) : value
      ]));
    return { id: obj[0], ...obj[1] };

}
export function convertSquadPlayer(obj: any) {
    return { id: obj[0], ...obj[1], isSub: obj[2] };

}