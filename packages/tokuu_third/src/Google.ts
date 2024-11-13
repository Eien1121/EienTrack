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
    export async function exchangeCodeForToken(code: string) {
        console.log("exchangeCodeForToken");
        const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                code: code,
                client_id: config.client_id,
                client_secret: "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",
                redirect_uri: "http://localhost:5173",
                grant_type: "authorization_code",
            }),
        });

        return await response.json();
    }
}
