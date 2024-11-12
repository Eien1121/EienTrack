/**
 * 全局属性和方法
 */
namespace tokuu_track {
    /**
     * 获取UUID
     */
    export function generateUUID() {
        var d = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
    /**
     * 获取URL参数
     * @param value
     */
    export function getQueryVariable(value: string): string | null {
        const params = new URLSearchParams(location.search);
        return params.get(value);
    }
    /**
     * 是否为移动设备
     */
    export function isMobile() {
        const flag = navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        return flag;
    }
    /**是否android */
    export function isAndroid() {
        const flag = navigator.userAgent.match(/(Android)/i);
        return flag;
    }
    /**是否IOS */
    export function isIOS() {
        const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad)/i);
        return flag;
    }
}
