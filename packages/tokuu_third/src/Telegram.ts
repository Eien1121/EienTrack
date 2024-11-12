namespace tokuu_third.telegram {
    const sdkUrl = "https://telegram.org/js/telegram-widget.js";
    export let isInit = false;
    const config = {
        bot_id: "",
        request_access: "write",
        embed: 1,
    };

    /**
     * 初始化
     * @param params tg控制台参数
     * @returns
     */
    export function init(params): Promise<any> {
        console.log("telegram init...");
        Object.assign(config, params);
        return loadScript([sdkUrl]).then(() => {
            isInit = true;
        });
    }

    /**
     * 登录
     * @returns
     */
    export function login(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (isInit) {
                Telegram.Login.auth(config, (response) => {
                    if (response) resolve(response);
                    else reject(tokuu_third.EnumThirdStatus.FAILED);
                });
            } else {
                reject(tokuu_third.EnumThirdStatus.UNINITIALIZED);
            }
        });
    }

    /**
     * 分享
     * @param url 分享路径
     * @param text 分享文本
     */
    export function share(url: string, text: string) {
        const shareLink = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`;
        openLink(shareLink);
    }
}
