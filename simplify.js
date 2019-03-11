var simplify = function(epochTime) {
    let lastSeen = 'Last seen: ';
    let currentTime = Date.now();
    let elapsed = currentTime - epochTime;
    const toMins = mins => Math.floor((mins/1000)/60);
    const toHours = hours => Math.floor(toMins(hours)/60);
    const toDays = days => Math.floor(toHours(days)/24);

    if (elapsed < 120000) {
        lastSeen += 'moments ago';
    } else if (elapsed < 3600000) {
        lastSeen += toMins(elapsed) + ' minutes ago';
    } else if (elapsed < 7000000) {
        lastSeen += '1 hour ago'
    } else if (elapsed < 86400000) {
        lastSeen += toHours(elapsed) + ' hours ago';
    } else if (elapsed < 172000000) {
        lastSeen += '1 day ago';
    } else if (elapsed >  172000000) {
        lastSeen += toDays(elapsed) + ' days ago';
    }

    return lastSeen;
}
