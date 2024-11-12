namespace tokuu_third.whatsapp {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string) {
        const shareLink = `https://api.whatsapp.com/send?text=${text}&url=${encodeURIComponent(url)}`;
        openLink(shareLink);
    }
}
