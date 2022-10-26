/*-----------------------------------------------------------
 * Template Name    : Custom script for - RectCV template
 * Author           : Jorge Sancho
 * Version          : 1.0.0
 * Created          : September 2022
 * File Description : Script to fill blog elements
 *--
 */

window.onload = function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('_id')) {

        const _id = urlParams.get('_id')
        console.log(_id);


        // Get index from server
        $.getJSON('./assets/blog_entries/' + _id + '/content.json', function (data) {


            // Get elements from DOM
            var postTitle = document.getElementById('post-title');
            postTitle.innerHTML = data.title;

            var postImage = document.getElementById('post-image');
            postImage.src = data.image;

            var postDate = document.getElementById('post-date');
            postDate.innerHTML = data.date;

            var postAuthor = document.getElementById('post-author');
            postAuthor.innerHTML = data.author;

            var postContent = document.getElementById('post-content');
            postContent.innerHTML = data.content.join('');


        });

    } else {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let n =  new Date();
        let y = n.getFullYear();
        let m = n.getMonth();
        let d = n.getDate();
        document.getElementById('post-date').innerHTML = d + " " + monthNames[m] + ", " + y;
    }


}