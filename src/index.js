/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    const preferencesLength = preferences.length;

    for (let i = 0; i < preferencesLength; i++) {
        const isDoesFirstLoverLoveHimself= (preferences[i] != i + 1);
        const isDoesSecondLoverLoveHimself = preferences[preferences[i] - 1] != preferences[i];
        const isDoesThirdLoverLoveHimself = preferences[preferences[preferences[i] - 1] - 1] != preferences[preferences[i] - 1];
        const isDoesThirdLoverLoveFirstLover = preferences[preferences[preferences[i] - 1] - 1] == i + 1;

        if (isDoesFirstLoverLoveHimself && isDoesSecondLoverLoveHimself
            && isDoesThirdLoverLoveHimself && isDoesThirdLoverLoveFirstLover) {
            count++;
        }
    }

    return count / 3;
};
