const loadDataForLetsDiscuss = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const allPosts = await response.json();
    displayPosts(allPosts?.posts)
}

const displayPosts = (posts) => {
    const postContainer = document.getElementById('all-posts-container');
    posts.map(post => {
        console.log(post)
        const parentDiv = document.createElement('div');
        const leftDiv = document.createElement('div');
        const rightDiv = document.createElement('div');

        parentDiv.classList.add('bg-[#F3F3F5]', 'mb-4', 'p-10', 'flex', 'gap-5');
        leftDiv.classList.add('w-20', 'h-16', 'rounded', 'bg-white', 'mb-4');

        rightDiv.innerHTML = `
                        <div class="flex gap-10">
                            <p># ${post?.category}</p>
                            <p>Author: ${post?.author?.name}</p>
                        </div>
                        <h3 class="text-2xl">${post?.title}</h3>
                        <p>${post?.description}</p>
    
                        <div class="flex justify-between">
                            <div class="flex gap-5">
                                <div class="flex">
                                    <img src="./images/messageIcon.svg" alt="">
                                    <p>${post?.comment_count}</p>
                                </div>
                                <div class="flex">
                                    <img src="./images/eyeIcon.svg" alt="">
                                    <p>${post?.view_count}</p>
                                </div>
                                <div class="flex">
                                    <img src="./images/clockIcon.svg" alt="">
                                    <p>${post?.posted_time} min</p>
                                </div>
                            </div>
    
                            <div>
                                <img src="./images/mark.svg" alt="">
                            </div>
    
                        </div>
        `

        parentDiv.appendChild(leftDiv);
        parentDiv.appendChild(rightDiv);

        postContainer.appendChild(parentDiv)
    })

}

loadDataForLetsDiscuss();