namespace tokuu_third.ok {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string, title: string = "", image: string = "") {
        url = encodeURIComponent(url);
        const shareLink = `https://connect.ok.ru/offer?url=${url}&title=${title}&imageUrl=${image}&description=${text}`;
        openLink(shareLink);
    }
}
