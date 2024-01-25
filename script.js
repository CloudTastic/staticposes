function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('copyText').addEventListener('click', function () {
    // Create a range object to select text
    var range = document.createRange();
    range.selectNode(document.getElementById('copyText'));

    // Select the text
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Create a toast notification
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = 'Text copied!';
    document.body.appendChild(toast);

    // Hide the toast after a short delay (e.g., 2 seconds)
    setTimeout(function () {
        toast.style.opacity = '0';
    }, 2000);
});
