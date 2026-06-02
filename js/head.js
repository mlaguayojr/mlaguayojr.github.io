window.headReady = new Promise(resolve => {
  document.addEventListener('DOMContentLoaded', async () => {
    if (typeof Mustache === 'undefined') {
      await new Promise(r => {
        const script = document.createElement('script');
        script.src = '/mustache.min.js';
        script.onload = r;
        document.head.appendChild(script);
      });
    }

    const currentPath = window.location.pathname;
    const depth = (currentPath.match(/\//g) || []).length - 1;
    const cssPrefix = depth === 0 ? '' : '../'.repeat(depth);
    const isBlogPost = currentPath.includes('/blog/pages/');
    const blogPostCssPrefix = isBlogPost ? '../'.repeat(depth - 1) : '';

    const res = await fetch('/templates/head.html');
    const template = await res.text();
    const html = Mustache.render(template, { cssPrefix, isBlogPost, blogPostCssPrefix });

    document.head.insertAdjacentHTML('afterbegin', html);
    resolve();
  });
});
