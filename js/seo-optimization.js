// SEO Optimization in JavaScript

// Function to add meta tags
function addMetaTags() {
    const metaTags = [
        { name: 'description', content: 'Your website description goes here.' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { property: 'og:title', content: 'Your Website Title' },
        { property: 'og:description', content: 'A brief description of your website.' },
        { property: 'og:image', content: 'URL to your image' },
        { property: 'og:url', content: window.location.href },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Your Website Title'},
        { name: 'twitter:description', content: 'A brief description of your website.'},
        { name: 'twitter:image', content: 'URL to your image' },
    ];

    metaTags.forEach((tag) => {
        const meta = document.createElement('meta');
        Object.keys(tag).forEach((key) => {
            meta.setAttribute(key, tag[key]);
        });
        document.head.appendChild(meta);
    });
}

// Function to add structured data for Schema.org
function addStructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Your Website Name',
        url: window.location.href,
        description: 'A brief description of your website.',
        image: 'URL to your image'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Function for social sharing
function addSocialSharingButtons() {
    const sharingDiv = document.createElement('div');
    sharingDiv.innerHTML = `
        <a href='https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}' target='_blank'>Share on Facebook</a>
        <a href='https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}' target='_blank'>Share on Twitter</a>
        <a href='https://linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}' target='_blank'>Share on LinkedIn</a>
    `;
    document.body.appendChild(sharingDiv);
}

// Initialization
function initSEO() {
    addMetaTags();
    addStructuredData();
    addSocialSharingButtons();
}

// Call the init function to set everything up
initSEO();