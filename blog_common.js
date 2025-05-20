function populateElementWithFile(elementName, fileName) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Unable to get ${fileName}: ${response.status}`);
            }
            return response.text()
        })
        .then(html => {
            document.getElementById(elementName).innerHTML = html;
        })
        .catch(err => {
            console.warn(err);
        });
}

function findBlogPost(blogsList) {
    const urlParams = new URLSearchParams(window.location.search);
    const postIdStrVal = urlParams.get("post")
    const postId = Number(postIdStrVal);
    var title, datePosted
    for (const entry of blogsList) {
        if (entry[0] === postId) {
            return entry
        }
    }
}

function blogPostListHtml(blogPostList, link_base) {
    blog_list = ""

    for (const entry of blogPostList) {
        blog_list += `<a href="/${link_base}.html?post=${entry[0]}">${entry[1]}</a><br><i>${entry[2]}</i><br><br>`
    }

    return blog_list
}