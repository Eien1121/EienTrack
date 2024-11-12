namespace tokuu_third {
    export function loadScript(list: string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const loadCount: number[] = [];
            let loadArray: string[] = [];

            loadArray = list;
            let loaded = 0;
            function loadNext() {
                loadSingleScript(list[loaded], function () {
                    loaded++;
                    if (loaded >= list.length) {
                        resolve(1);
                    } else {
                        loadNext();
                    }
                });
            }
            loadNext();

            function loadSingleScript(src: string, callback: any) {
                let s: any = document.querySelector(`script[src="${src}"]`);
                if (s) callback();

                loadCount[loadArray.indexOf(src)] = (loadCount[loadArray.indexOf(src)] || 0) + 1;
                s = document.createElement("script");
                s.async = false;
                s.src = src;
                s.addEventListener(
                    "load",
                    function f() {
                        s.removeEventListener("load", f, false);
                        callback();
                    },
                    false
                );
                s.onerror = function () {
                    if (loadCount[loadArray.indexOf(src)] >= 3) {
                        reject();
                    } else {
                        loadSingleScript(src, callback);
                    }
                };
                document.querySelector("head").appendChild(s);
            }
        });
    }
}
