const pageLinks = document.getElementsByTagName('a');

// /. variables

[...pageLinks].forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});
