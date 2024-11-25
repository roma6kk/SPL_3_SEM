let store = {
    state: {    // 1 уровень
        profilePage: {  // 2 уровень
            posts:  [   //3 уровень
                {id: 1, massage: 'Hi', likeCount: 12},
                {id: 2, message: 'By', likeCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs:    [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1,message: 'hi'},
                {id: 2,message: 'hi hi'},
                {id: 3,message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}

let {
    state :{
        profilePage :{
            posts: [
                post1,
                post2,
            ],
            newPostText,
        },
        dialogsPage: {
            dialogs: [
                dialog1,
                dialog2,
                dialog3,
                dialog4,
            ],
            messages: [
                message1,
                message2,
                message3,
            ],
        sidebar,
        },
    },
} = store;

console.log(post1.likeCount);
console.log(post2.likeCount);

dialogsMassive = [dialog1,dialog2,dialog3,dialog4];
filteredDialogsMassive = [];
let i = 0;
dialogsMassive.forEach((dialog) =>
{
    if(dialog.id % 2 === 0)
{
    filteredDialogsMassive[i] = dialog;
    i++;
}
});
for(let j = 0 ;j < filteredDialogsMassive.length;j++){
    console.log(filteredDialogsMassive[j]);
}

messagesMassive = [message1,message2,message3];
messagesMassive.forEach((messageWindow )=>
{ messageWindow.message = "Hello user"} );

for(let j = 0 ;j < messagesMassive.length;j++){
    console.log(messagesMassive[j]);
}
