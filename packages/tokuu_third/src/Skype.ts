namespace tokuu_third.skype {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string) {
        const shareLink = `https://web.skype.com/share?url=${encodeURIComponent(url)}&text=${text}`;
        openLink(shareLink);
    }
}
