namespace tokuu_third.google {
    const sdkUrl = "https://accounts.google.com/gsi/client";
    const config = {
        client_id: "",
        scope: "",
        ux_mode: "popup",
        select_account: true,
        callback: null,
        error_callback: null,
    };

    export let isInit = false;

    /**
     * 初始化
     * @param clientId
     * @param scope
     * @returns
     */
    export function init(client_id: string, _scope?: string): Promise<any> {
        const scope = _scope || "email profile";
        Object.assign(config, { client_id, scope });
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
                window.google.accounts.oauth2
                    .initCodeClient(
                        Object.assign(config, {
                            callback: (response: any) => {
                                resolve(response);
                            },
                            error_callback: (error: any) => {
                                reject(EnumThirdStatus.FAILED);
                            },
                        })
                    )
                    .requestCode();
            } else {
                return reject(EnumThirdStatus.UNINITIALIZED);
            }
        });
    }
}
