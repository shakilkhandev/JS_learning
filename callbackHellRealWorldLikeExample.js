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


//callbackHell example //

/*     

const getUser = (userID, callback) => {
    setTimeout(() => {
        let user = users.find((user) => user.userID === userID);
        console.log("User found :", user.userName);

        callback(user);
    }, 1000)
};

const getPost = (user, callback) => {

    let posts = user.posts;
    setTimeout(() => {

        console.log("User post fetched ....  ");
        posts.map((post, index) => {
            console.log("Post :", index, " \n ");
            console.log(post.caption);
            callback(post);

            console.log(` \n  \n `)
        }
        )

    }, 1500);


};

const getComments = (post, callback) => {

    let comments = post.comments;
    comments.map((commnent) => console.log("User.ID : ", commnent.userID, "\n comment : ", commnent.comment));

    callback("   \n   \n   ")



}


getUser(1, (user) => {
    getPost(user, (post) => {
        getComments(post, (endConfirmation) => {
            console.log(endConfirmation);
        })

    })
}

) 


 */



// by using     Promises


// const getUser = (userID) => {
//     return new Promise((res, rej) => setTimeout(() => {


//         let user = users.find((user) => user.userID === userID);
//         if (user) {

//             console.log("User found :", user.userName);

//             res(user);
//         }
//         rej("User not Found");

//     }, 1000)
//     )
// };

// const getPost = (user) => {



//     let posts = user.posts;
//     if (posts) {
//         setTimeout(() => {

//             console.log("User posts fetching ....  ");
//             posts.map((post, index) => {
//                 console.log("Post :", index, " \n ");
//                 console.log(post.caption);
//                 let comments = post.comments;

//                 if (comments.length > 0) {
//                     comments.map((commnent) => console.log("User.ID : ", commnent.userID, "\n comment : ", commnent.comment));

//                     console.log(` \n  \n `)
//                 }
//             }
//             )

//         }, 1500);

//     }


// };





// getUser(1)
//     .then((user) => getPost(user))
//     .catch(err => console.log("error:", err))



// ***********************by using  promise.all *******************
//  **********to resolve all promise at once **************


function getUser(userId) {
    return new Promise(
        (res, rej) => {
            setTimeout(() => {
                let user = users.find((user) => user.userID === userId)
                if (user) {
                    console.log(`User found : ${user.userName}`);
                    return res(user);
                } else {
                    rej("User not found");
                }
            }, 2000)

        });
}

function getPost(user) {
    return new Promise((res, rej) => {

        setTimeout(() => {

            let posts = user.posts;

            if (posts.length > 0) {
                console.log("Start Fetching Posts");
                res(posts)
            } else {
                rej("No posts found");
            }


        })

    }, 1000)


}



function getComments(post) {
    return new Promise ((res, rej )=>{
      
            let comments = post.comments;
            if (comments.length >  0 ){
            comments.map((comments)=>console.log("UserID : " ,comments.userID, "\n ","comment : ", comments.comment));
            res ("\n No more comments");


            }else{
                rej("No comments found")
            }
    })
}


getUser(1)
         .then( (user) => getPost(user))
         .then( (posts) =>{
            return Promise.all(
                posts.map((post,index)=>{
                    console.log("post : ",index+1);
                    console.log(post.caption);
                    getComments(post);

                    console.log("\n   \n ")

                }))
            })
            .catch((err) => console.log("Error : " , err));

