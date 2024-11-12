namespace tokuu_third.line {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string) {
        const shareLink = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
        openLink(shareLink);
    }
}
