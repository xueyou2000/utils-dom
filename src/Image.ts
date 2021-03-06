/**
 * 加载图片工厂函数
 * @param src 图片地址
 */
function ImageFactory(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;

        if (img.complete) {
            resolve(img);
        } else {
            img.onload = () => resolve(img);
            img.onerror = (event: Event | string) => reject(event);
            // img.onabort 事件也许应该处理
        }
    });
}

/**
 * 加载图片
 * @param url   图片地址
 */
export function loadImage(url: string) {
    return ImageFactory(url);
}

/**
 * 加载图片
 * @param base64 图片base64数据
 */
export function loadImageBase64(base64: string) {
    const flag = "data:image/jpeg;base64,";
    return ImageFactory(base64.indexOf(flag) === 0 ? base64 : `${flag}${base64}`);
}
