namespace tokuu_load {
    export function loadScript(URL: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let loadCount = 0;
            loadSingleScript(URL);

            function loadSingleScript(src: string) {
                let s: any = document.querySelector(`script[src="${src}"]`);
                if (s) {
                    resolve(1);
                } else {
                    loadCount++;
                    s = document.createElement("script");
                    s.async = false;
                    s.src = src;
                    s.addEventListener(
                        "load",
                        function f() {
                            s.removeEventListener("load", f, false);
                            resolve(1);
                        },
                        false
                    );
                    s.onerror = function () {
                        document.querySelector("head").removeChild(s);
                        if (loadCount >= 3) {
                            reject(`Failed to load script: ${src}`);
                        } else {
                            loadSingleScript(src);
                        }
                    };
                    document.querySelector("head").appendChild(s);
                }
            }
        });
    }
}
