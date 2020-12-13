export default function() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    return mobileDevice.some(e => navigator.userAgent.match(e));
}
