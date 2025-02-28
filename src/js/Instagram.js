export const InstagramFeed = () => {
    const targetDiv = document.querySelector('.instagram-wrapper');

    if (!targetDiv) return

    // Buat observer
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                if (targetDiv.innerHTML.trim() !== '') {
                    const feed = targetDiv.querySelector("#sb_instagram")
                    const clone = feed.cloneNode(true)
                    feed.parentNode.append(clone)

                    observer.disconnect();
                }
            }
        }
    });

    // Konfigurasi observer (pantau perubahan pada child nodes)
    const config = {
        childList: true,
        subtree: true,
        characterData: true,
    };

    // Mulai memantau targetDiv
    observer.observe(targetDiv, config);
}