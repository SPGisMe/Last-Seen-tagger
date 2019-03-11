var simplify = function(epochTimeUnix) {
    let lastSeen = 'Last seen: ';
    let currentTime = Date.now()/1000;
    let elapsed = currentTime - epochTimeUnix;
    const toMins = mins => Math.floor(mins/60);
    const toHours = hours => Math.floor(toMins(hours)/60);
    const toDays = days => Math.floor(toHours(days)/24);

    if (elapsed < 120) {
        lastSeen += 'moments ago';
    } else if (elapsed < 3600) {
        lastSeen += toMins(elapsed) + ' minutes ago';
    } else if (elapsed < 7000) {
        lastSeen += '1 hour ago'
    } else if (elapsed < 86400) {
        lastSeen += toHours(elapsed) + ' hours ago';
    } else if (elapsed < 172000) {
        lastSeen += '1 day ago';
    } else if (elapsed >  172000) {
        lastSeen += toDays(elapsed) + ' days ago';
    }

    return lastSeen;
}
