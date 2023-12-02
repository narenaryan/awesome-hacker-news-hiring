let results = null;
(function() {
    const postings = document.querySelectorAll('tr.comtr'); // Select all comment rows
    let jobLinks = new Set(); // Using a Set to avoid duplicates

    postings.forEach(post => {
        const text = post.innerText || '';
        const urls = text.match(/https?:\/\/\S+/gi); // Match all URLs
        if (urls) {
            urls.forEach(url => {
                // Remove trailing characters, query parameters, and anchors
                const cleanUrl = url.replace(/[),.]+$/, '').split(/[?#]/)[0];
                if (!cleanUrl.includes('ycombinator.com')) {
                    jobLinks.add(cleanUrl);
                }
            });
        }
    });

    // Output the unique job links
    results = Array.from(jobLinks);
})();
// Use results here
console.log(JSON.stringify({data: results}));
