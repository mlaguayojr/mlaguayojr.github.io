const navData = {
  items: [
    {
      label: "About",
      href: "/index.html",
      path: "/index.html"
    },
    {
      label: "Blog",
      href: "/blog/index.html",
      path: "/blog/"
    },
    {
      label: "Career",
      href: "/career/index.html",
      path: "/career/"
    },
    {
      label: "Projects",
      href: "/projects/index.html",
      path: "/projects/"
    },
    {
      label: "Education",
      href: "/education/index.html",
      path: "/education/"
    }
  ]
};

function getRelativePath(targetHref) {
  const currentPath = window.location.pathname;
  const currentDepth = (currentPath.match(/\//g) || []).length - 1;

  if (currentDepth === 0) {
    return targetHref;
  }

  const prefix = '../'.repeat(currentDepth);
  return prefix + targetHref.replace(/^\//, '');
}

window.headReady.then(async () => {
  const res = await fetch('/templates/nav.html');
  const template = await res.text();

  const currentPath = window.location.pathname;

  const itemsWithActive = navData.items.map(item => ({
    label: item.label,
    href: getRelativePath(item.href),
    active: currentPath === item.href || currentPath.startsWith(item.path)
  }));

  const navHtml = Mustache.render(template, { items: itemsWithActive });

  const navElement = document.querySelector('.main-nav');
  if (navElement) {
    navElement.innerHTML = navHtml;
  }
});
