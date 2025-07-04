export default function forceLowercaseAssets() {
    return {
        name: 'force-lowercase-assets',
        generateBundle(_, bundle) {
            for (const fileName in bundle) {
                const asset = bundle[fileName];
                if (asset.fileName && /\.(png|jpe?g|gif|svg|webp|avif|css|js)$/.test(asset.fileName)) {
                    const lower = asset.fileName.toLowerCase();
                    if (lower !== asset.fileName) {
                        asset.fileName = lower;
                    }
                }
            }
        }
    }
}