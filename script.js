document.querySelectorAll('include').forEach(function(el) {
    let src = el.getAttribute('src');
    if (src) {
        fetch(src)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                el.insertAdjacentHTML('beforebegin', data);
                el.remove();
            })
            .catch(error => {
                console.error('Error fetching the include file:', error);
            });
    }
});
