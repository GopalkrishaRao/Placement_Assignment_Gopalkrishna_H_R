const blogParagraph = document.querySelector('.blog');
const newBlogParagraph = document.querySelector('.usersNewBlog');
const addButton = document.querySelector('.add');
let newBlogId = Math.floor(Math.random() * 1000000);

let apiLink = "https://jsonplaceholder.typicode.com/posts";

        const apiData = async (link) => {
            const response = await fetch(link);
            const data = await response.json();
            displayData(data);
        }

        const displayData = (data) => {
            data.map((item) => {
                const blogItem = document.createElement('ul');
                blogItem.innerHTML =
                    `<li id=${item.id}>
                        <div>
                            <span class="titleSpan">
                                Title:
                            </span>
                            <span class='title'>
                                "${item.title}"
                            </span>
                            <div class='blogID'>
                                Blog Id: ${item.id}
                            </div>
                            <div class='useID'>
                                Author (user id): ${item.userId}
                            </div>
                        </div>
                    </li>`;
                blogParagraph.appendChild(blogItem);
            });
        }

        addButton.addEventListener('click', () => {
            const title = prompt('Enter the blog title:');
            const userId = prompt('Enter your user ID:');

            const newBlogItem = document.createElement('ul');
            newBlogId = Math.floor(Math.random() * 1000000);
            newBlogItem.innerHTML =
                `<li id="${newBlogId}">
                    <div>
                        <span class="titleSpan">
                            Title:
                        </span>
                        <span class='title'>
                            "${title}"
                        </span>
                        <div class='blogID'>
                            Blog Id: ${newBlogId}
                        </div>
                        <div class='useID'>
                            Author (user id): ${userId}
                        </div>
                        <button class='delete' onclick='deleteBlog(${newBlogId})'>
                            Delete
                        </button>
                    </div>
                </li>`;
            newBlogParagraph.appendChild(newBlogItem);
        });

        const deleteBlog = (id) => {
            const blogItem = document.getElementById(id).style.display="none";
            // const blogItem = document.getElementById(id)
            // newBlogParagraph.removeChild(document.getElementById(id));
        }

        apiData(apiLink);