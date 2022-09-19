/*-----------------------------------------------------------
 * Template Name    : Custom script for - RectCV template
 * Author           : Jorge Sancho
 * Version          : 1.0.0
 * Created          : September 2022
 * File Description : Script to fill blog elements
 *--
 */

window.onload = function() {

    // Get elements from DOM
    var blogContent = document.getElementById('blog-content');
    let examplePost = blogContent.removeChild(blogContent.lastElementChild);
    console.log(examplePost);

    // Get index from server
    $.getJSON('./assets/blog_entries/index.json', function(data) {


        for (let i = 0; i < data.entries.length; i++) {
            let post = data.entries[i];

            mainDiv = createElements(post)
            blogContent.appendChild(mainDiv);

        }

    });



/*
    function createElements2(post){

        var elem = "                   \n" +
            "                        <div class=\"news-cover col-md-4 m-auto\">\n" +
            "                            <img src=\"" + post.image + "\" width=\"800\" height=\"530\" alt=\"\" class=\"img-fluid mx-auto\">\n" +
            "                        </div>\n" +
            "                        <div class=\"news-content col-md-6 mt-3 mt-md-0\">\n" +
            "                            <div class=\"news-meta d-flex flex-row my-1\">\n" +
            "                                <div class=\"news-meta-single mr-3\">\n" +
            "                                    <span class=\"mbri-calendar\"></span>\n" +
            "                                    <span class=\"meta-value\">" + post.date + "</span>\n" +
            "                                </div>\n" +
            "                                <div class=\"news-meta-single\">\n" +
            "                                    <span class=\"mbri-user\"></span>\n" +
            "                                    <span class=\"meta-value\">by <a href=\"#\">" + post.author + "</a></span>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"news-title m-0\">\n" +
            "                                <a href=\"./blog_page.html\" class=\"blog-permalink\">\n" +
            "                                    <h3>" + post.title + "</h3>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <p class=\"my-1\">" + post.resume + "</p>\n" +
            "\n" +
            "                            <!--- padding to compensate padding in class col-md-6 --->\n" +
            "                            <div style=\"padding-right:15px;padding-left:15px\" class=\"button_and_social\">\n" +
            "                                <div class=\"row\">\n";

        for (let i = 0; i < post.tags.length; i++) {
            let tag = post.tags[i];


            elem = elem + "                     <div class=\"mx-1\">\n" +
            "                                        <div style=\"padding:.2rem .3rem;\" class=\"btn-outline-primary my-1\">" + tag + "</div>\n" +
            "                                    </div>\n"

        }
        elem = elem + "                      </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    "


        const mainDiv = document.createElement('div');
        mainDiv.style = "background-color: #252b2f; border: 0;";
        mainDiv.classList.add('news-item');
        mainDiv.classList.add('row');
        mainDiv.classList.add('mt-5');
        mainDiv.classList.add('justify-content-center');
        mainDiv.classList.add('align-items-center');
        mainDiv.innerHTML = elem

        return mainDiv

    }
*/

    function createElements(post) {
        // mainDiv
        const mainDiv = document.createElement('div');
        mainDiv.style = "background-color: #252b2f; border: 0;";
        mainDiv.classList.add('news-item');
        mainDiv.classList.add('row');
        mainDiv.classList.add('mt-5');
        mainDiv.classList.add('justify-content-center');
        mainDiv.classList.add('align-items-center');

            // imgDiv
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('news-cover');
            imgDiv.classList.add('col-md-4');
            imgDiv.classList.add('m-auto');

                // img
                const img = document.createElement('img');
                img.classList.add('img-fluid');
                img.classList.add('mx-auto');
                img.src = post.image;

            // add img to imgDiv
            imgDiv.appendChild(img);

            // news-content div
            const newsContentDiv = document.createElement('div');
            newsContentDiv.classList.add('news-content');
            newsContentDiv.classList.add('col-md-6');
            newsContentDiv.classList.add('mt-3');
            newsContentDiv.classList.add('mt-md-0');

                // news-meta div
                const newsMetaDiv = document.createElement('div');
                newsMetaDiv.classList.add('news-meta');
                newsMetaDiv.classList.add('d-flex');
                newsMetaDiv.classList.add('flex-row');
                newsMetaDiv.classList.add('my-1');

                    // news-meta-calendar div
                    const newsMetaCalendarDiv = document.createElement('div');
                    newsMetaCalendarDiv.classList.add('news-meta-single');
                    newsMetaCalendarDiv.classList.add('mr-3');

                        // calendar obj
                        const calendarIcon = document.createElement('span');
                        calendarIcon.classList.add('mbri-calendar');

                        const calendarValue = document.createElement('span');
                        calendarValue.classList.add('meta-value');
                        calendarValue.innerHTML = post.date;

                    // add calendar objects to newsMetaCalendarDiv
                    newsMetaCalendarDiv.appendChild(calendarIcon);
                    newsMetaCalendarDiv.appendChild(calendarValue);

                    // news-meta-author div
                    const newsMetaAuthorDiv = document.createElement('div');
                    newsMetaAuthorDiv.classList.add('news-meta-single');

                        // author obj
                        const authorIcon = document.createElement('span');
                        authorIcon.classList.add('mbri-user');

                        const authorValue = document.createElement('span');
                        authorValue.classList.add('meta-value');
                        authorValue.innerHTML = post.author;

                    // add author objects to newsMetaAuthorDiv
                    newsMetaAuthorDiv.appendChild(authorIcon);
                    newsMetaAuthorDiv.appendChild(authorValue);

                // add newsMetaCalendarDiv and newsMetaAuthorDiv to newsMetaDiv
                newsMetaDiv.appendChild(newsMetaCalendarDiv);
                newsMetaDiv.appendChild(newsMetaAuthorDiv);

                // news-title div
                const newsTitleDiv = document.createElement('div');
                newsTitleDiv.classList.add('news-title');
                newsTitleDiv.classList.add('m-0');

                    // link
                    const newsTitleLink = document.createElement('a');
                    newsTitleLink.classList.add('blog-permalink');
                    newsTitleLink.href = "./blog_page.html?id=" + post._id;
                    newsTitleLink.innerHTML = "<h3>" + post.title + "</h3>";

                // add newsTitleLink to newsTitleDiv
                newsTitleDiv.appendChild(newsTitleLink);

                // resume paragraph
                const resume = document.createElement('p');
                resume.classList.add('my-1');
                resume.innerHTML = post.resume;

                // tagsDiv
                const tagsDiv = document.createElement('div');
                tagsDiv.classList.add('button_and_social');
                tagsDiv.style = "padding-right:15px;padding-left:15px";

                    //tagsRowDiv
                    const tagsRowDiv = document.createElement('div');
                    tagsRowDiv.classList.add('row');

                        for (let i = 0; i < post.tags.length; i++) {
                            let tag = post.tags[i];

                            //tagsRowColDiv
                            const tagsRowColDiv = document.createElement('div');
                            tagsRowColDiv.classList.add('mx-1');

                                // tagDiv
                                const tagDiv = document.createElement('div');
                                tagDiv.classList.add('btn-outline-primary');
                                tagDiv.classList.add('my-1');
                                tagDiv.style = "padding:.2rem .3rem;";
                                tagDiv.innerHTML = tag;

                            // add tagDiv to tagsRowColDiv
                            tagsRowColDiv.appendChild(tagDiv);

                            // add tagsRowColDiv to tagsRowDiv
                            tagsRowDiv.appendChild(tagsRowColDiv);

                        }

                // Add tagsRowDiv to tagsDiv
                tagsDiv.appendChild(tagsRowDiv);

            // add news-meta, news-title, resume and tagsDiv to news-content
            newsContentDiv.appendChild(newsMetaDiv);
            newsContentDiv.appendChild(newsTitleDiv);
            newsContentDiv.appendChild(resume);
            newsContentDiv.appendChild(tagsDiv);

        // add news-cover, news-content to mainDiv
        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(newsContentDiv);

        return mainDiv;
    }




    /*
    this.sended = false;
    var that = this;

    var successMessage = "Message Send",
        repeatMessage = "Message already Send",
        warningMessage = "Something wrong! Please try later";

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        contact_state("loading");
        if (!that.sended) {

            // these IDs from the previous steps
            emailjs.sendForm('service_s1o17pn', 'template_0ii5pbb', this)
                .then(function () {
                    custom_alert(successMessage, "success");
                    contact_state("disable");
                }, function (error) {
                    custom_alert(warningMessage, "error");
                    contact_state("disable");
                });

            that.sended = true;
        } else {
            custom_alert(repeatMessage, "success");
            contact_state("disable");
        }

    });
    */

}