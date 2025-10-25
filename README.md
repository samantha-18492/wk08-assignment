Problem domain:
Create a blog where each post explores a specific fear, providing both an informative reflection on the fear and a recommended film(s) to help users confront or understand that fear. The blog encourages users to engage by commenting on their experiences with the fear, rating its intensity, and sharing their own film suggestions.

End goal:To create a space where users not only explore fears in a thoughtful and therapeutic way, but also engage with film as a tool for overcoming those fears in a supportive, interactive environment.

Requirements:

- Display all posts on the page, with an option to sort them in ascending or descending order.
- Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key. Provide evidence of your database schema.
- Create a delete button on posts that allows users to delete the post from the database.
- Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
- Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
- Add a redirect when a user creates a post to redirect them to the posts page.

Wireframe:
<img width="1109" height="767" alt="Image" src="https://github.com/user-attachments/assets/105e9a46-8ec0-40e2-af4b-c127461f5404" />

Database schema:
<img width="647" height="373" alt="Image" src="https://github.com/user-attachments/assets/5cefac06-4afc-4ba1-959b-1da00a1721a9" />

Reflection:
I’ve really enjoyed this week’s project! Working in Next.js felt much simpler and far less time-consuming than I expected. I also made an early start on Wednesday evening, which helped me stay calm and focused while working through the requirements. The combination of getting ahead and feeling more confident with the framework gave me extra time to experiment with styling, so I put that to good use exploring Tailwind CSS.

Having the styling inline really helped me visualise layouts, especially with flexbox, since it’s easy to see what properties are applied to both parent and child elements. It took a little time to get familiar with the shorthand classes, but Tailwind’s documentation was incredibly helpful. With more practice, I can definitely see myself using it in future projects. I even experimented with the animate-pulse preset and adjusted opacity levels by exploring the node_modules file structure. Although I decided against keeping the animation (it didn’t quite suit my theme), I’m glad I took the time to explore. It’s boosted my confidence in understanding how Tailwind works behind the scenes.

Starting earlier also gave me space to really think about my theme and design choices. I wasn’t rushed, so I could focus on finding the right images, fonts, and colours. I used Adobe Color and Realtime Colors to test different palettes, and even switched to a new colour scheme on the final day. Because I’d set up custom colour variables in my globals.css, updating the whole site was quick and seamless. (You’ll notice I didn’t change the colour labels but in a collaborative project, I definitely would for clarity.)

I also experimented with Google Fonts, learning how to import them properly, use the index.d.ts file, set up font variables, and apply them where needed. It felt like a good step forward in understanding font management within Next.js.

Another highlight was error handling. While Next.js can be quite particular, its error messages were clear and easy to act on. Deploying with Vercel instead of Render was also a great experience (much faster and simpler overall).

You’ll see that I chose to limit my database to just two tables this week (posts and comments). If I’d had more time, I would’ve liked to create a third table to hold all the film data so films could be associated with more than one blog post and vice versa. I decided against adding this for now due to time constraints, but I think it would really enhance the user experience. My original idea was to have each recommended film link out to external sources such as IMDb, making it easy for users to learn more about the movies mentioned in each post.

Questions:
One thing I’d like to query is about using redirects. If the user’s location isn’t changing, is a redirect still necessary? I added one in my CommentForm.jsx as a precaution, but I believe the revalidatePath function alone should trigger a re-render and display the new comment after submission. I’d love to confirm whether including both is considered best practice or just redundant.
