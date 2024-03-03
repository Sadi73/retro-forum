const loadDataForLetsDiscuss = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const allPosts = await response.json();
    displayPosts(allPosts?.posts)
}

const loadLatestPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latestPosts = await response.json();
    displayLatestPosts(latestPosts)
}

const displayPosts = (posts) => {
    const postContainer = document.getElementById('all-posts-container');
    posts.map(post => {
        const parentDiv = document.createElement('div');
        const leftDiv = document.createElement('div');
        const rightDiv = document.createElement('div');

        parentDiv.classList.add('bg-[#F3F3F5]', 'mb-4', 'p-10', 'flex', 'gap-5', 'rounded-lg');
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

const displayLatestPosts = (latestPosts) => {
    const latestPostsContainer = document.getElementById('latest-post-card-holder');
    latestPosts.map(latestPost => {
        console.log(latestPost)
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('card', 'w-96', 'bg-base-100', 'shadow-xl')
        parentDiv.innerHTML = `
                    <figure class="px-10 pt-10">
                        <img src=${latestPost?.cover_image} alt="cover"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body  ">
                        <div class='flex gap-2'>
                            <img src='./images/calendarIcon.svg'/>
                            <p>${latestPost?.author?.posted_date ? latestPost?.author?.posted_date : 'No Publish Date'}</p>
                        </div>
                        <h2 class="card-title">${latestPost?.title}</h2>
                        <p>${latestPost?.description}</p>
                        <div class="flex items-center gap-5">
                            <div class='w-10'>
                                <img src=${latestPost?.profile_image} class='rounded-full'/>
                            </div>

                            <div>
                                <h3 class='font-bold'>${latestPost?.author?.name}</h3>
                                <p class='text-sm'>${latestPost?.author?.designation ? latestPost?.author?.designation : 'Unknown' }</p>
                            </div>
                        </div>
                    </div>
        `;

        latestPostsContainer.appendChild(parentDiv)
    })

}

loadDataForLetsDiscuss();
loadLatestPosts()