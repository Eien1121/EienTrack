namespace tokuu_third {
    export function openLink(url: string) {
        try {
            window.open(url, "_blank");
        } catch (e) {
            const a = document.createElement("a");
            a.setAttribute("href", url);
            a.setAttribute("target", "_blank");
            document.body.appendChild(a);
            a.click();
        }
    }
}
