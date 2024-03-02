// Dynamically load the content of nav.html into the container
document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('dynamicNavbarContainer');

//     fetch('/Section/top_nav.html')
//         .then(response => response.text())
//         .then(data => {
//             navbarContainer.innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error loading nav.html:', error);
//         });
// });
    fetch('Section/top_nav.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading nav.html:', error);
        });
});
