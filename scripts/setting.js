// LocalStorageに値を設定する関数
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// LocalStorageから値を取得する関数
function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// LocalStorageから値を削除する関数
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

//アニメーションの設定
setpage();
function setpage() {
    const isDeviceAnimationOFF = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDeviceDarkmodeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const Animation = getLocalStorage('animation');
    const Darkmode = getLocalStorage('darkmode');
    // console.log(Animation);
    if (Animation == 1 || (Animation == 2 && isDeviceAnimationOFF)) {
        document.documentElement.classList.add('no-animations');
        // document.documentElement.style.setProperty('scroll-behavior', 'auto', 'important');
    }
    if (Darkmode == 1 || (Darkmode == 2 && isDeviceDarkmodeOn) || (Darkmode == null && isDeviceDarkmodeOn)) {
        document.documentElement.classList.add('darkmode');
    }
}