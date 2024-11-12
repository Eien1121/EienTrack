namespace tokuu_third.facebook {
    const sdkUrl = "https://connect.facebook.net/en_US/sdk.js";
    export let isInit = false;

    export function init(appId: string): Promise<any> {
        return loadScript([sdkUrl]).then(() => {
            FB.init({
                appId,
                autoLogAppEvents: true, // 自动记录应用事件
                cookie: true,
                xfbml: true,
                version: "v12.0",
            });
            isInit = true;
        });
    }

    export function login(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (isInit) {
                FB.login((response) => {
                    const authResponse = response.authResponse;
                    if (authResponse) {
                        resolve(authResponse);
                    } else {
                        reject(EnumThirdStatus.FAILED);
                    }
                });
            } else {
                reject(EnumThirdStatus.UNINITIALIZED);
            }
        });
    }

    export function share(url: string, message: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (isInit) {
                FB.ui({ method: "share", display: "popup", href: url }, (response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject(EnumThirdStatus.FAILED);
                    }
                });
            } else {
                reject(EnumThirdStatus.UNINITIALIZED);
            }
        });
    }
}
