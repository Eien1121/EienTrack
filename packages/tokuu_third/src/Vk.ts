namespace tokuu_third.vk {
    export let isInit = false;

    export function init() {}

    export function login() {}

    export function share(url: string, text: string, title: string = "", image: string = "") {
        url = encodeURIComponent(url);
        const shareLink = `https://vk.com/share.php?url=${url}&title=${title}&description=${text}&image=${image}`;
        openLink(shareLink);
    }
}
