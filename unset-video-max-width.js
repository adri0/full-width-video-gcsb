// Unset the max-width of the video
function unsetVideoWidth() {
    let qlYoutubeDiv = document.querySelector(".course-activity-content ql-youtube-video")
    if (qlYoutubeDiv) {
        let videoDiv = qlYoutubeDiv.shadowRoot.querySelector(".video");
        if (videoDiv) {
            videoDiv.style.setProperty("max-width", "unset", "important");
        }
    }
}

// Run the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", unsetVideoWidth);

// Optional: Observe DOM changes in case the 'video' div is loaded dynamically
const observer = new MutationObserver(
    (mutations, obs) => {
        unsetVideoWidth();
        // Disconnect after the first successful change to improve performance
        obs.disconnect();
    }
);

observer.observe(document, { childList: true, subtree: true });