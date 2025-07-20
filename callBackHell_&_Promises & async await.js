let users = [
    {
        userID: 1,
        userName: "shakil khan",
        posts: [
            {
                caption: " I am learing JavaScirpt",
                comments: [
                    {
                        userID: 2,
                        comment: "Thats great , wish you success",
                    }
                ]

            },

            {
                caption: "This is high time to concern about plastic waste",
                comments: [
                    {
                        userID: 34,
                        comment: "absolutely , goverment should take proper action ",
                    }
                ]

            },




        ]
    },
    {
        userID: 2,
        userName: "King khan",
        posts: [
            {
                caption: " I am watching a movie",
                comments: [
                    {
                        userID: 3,
                        comment: "what is the name of the movie?",
                    }
                ]

            },






        ]
    },
]







const getUser = (userID) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find((user) => user.userID === userID);
            if (user) {
                console.log("User found:", user.userName);
                res(user);
            } else {
                rej("User not found");
            }
        }, 1000);
    });
};

const getPost = (user) => {
    return new Promise((res, rej) => {
        let posts = user.posts;
        if (posts && posts.length > 0) {
            setTimeout(() => {
                console.log("User posts fetching ....");
                res(posts); // ✅ Return all posts
            }, 1500);
        } else {
            rej("No posts found");
        }
    });
};

const getComments = (post) => {
    return new Promise((res, rej) => {
        let comments = post.comments;
        if (comments && comments.length > 0) {
            comments.forEach((comment) => {
                console.log("User.ID:", comment.userID, "\nComment:", comment.comment);
            });
            res("✅ Comments fetched\n\n");
        } else {
            rej("No comments found");
        }
    });
};

// Run it
// getUser(1)
//     .then((user) => getPost(user))
//     .then((posts) => {
//         return Promise.all(
//             posts.map((post, index) => {
//                 console.log("Post:", index, "\n", post.caption);
//                 return getComments(post);
//             })
//         );
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log("❌ Error:", err));

async function run() {
    
    try {
          const user = await getUser(1);
          const post = await getPost(user);
          
    
          
          post.map((post)=>{
            console.log(post.caption);
            getComments(post);
            console.log("\n \n \n" )
          })
          
    }catch(err){
      console.log(err);
    }
}
    
  run();

    
  
  
  
  


