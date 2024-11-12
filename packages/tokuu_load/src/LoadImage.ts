namespace tokuu_load {
    export function loadImages(URL: string): Promise<{ src: string; width: number; height: number }> {
        return new Promise((resolve, reject) => {
            let loadCount: number = 0;
            loadSingleImage(URL);

            function loadSingleImage(src: string) {
                loadCount++;
                const img = new Image();
                img.src = src;

                img.onload = () => {
                    resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
                };

                img.onerror = () => {
                    if (loadCount >= 3) {
                        reject(`Failed to load image: ${src}`);
                    } else {
                        loadSingleImage(src);
                    }
                };
            }
        });
    }
}
