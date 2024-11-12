namespace tokuu_third.linkedin {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string) {
        const shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        openLink(shareLink);
    }
}
