namespace tokuu_third.twitter {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string) {
        const shareLink = `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${text}`;
        openLink(shareLink);
    }
}
