


const projects = document.getElementsByClassName('project');
var title = document.querySelector(".titleoverlay");
var para = document.querySelector(".paraoverlay"); 
var overlay = document.querySelector(".overlay");
var overlaycon = document.querySelector(".overlay .content");
var body = document.querySelector('body');
let data = [
    {
        title: 'title',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut fugiat asperiores modi dolorum quibusdam qui, tempora tenetur vel id ad voluptates nihil accusamus placeat ducimus repellat, fuga numquam voluptatem. Exercitationem modi maiores ipsa sunt, qui iste asperiores non similique placeat voluptate odio libero, voluptates commodi, unde cupiditate sequi! Quod cum repellendus nisi earum aut sunt sit quas soluta? Cupiditate itaque, illo eum facere veniam ex inventore voluptas soluta? Sunt vero iusto eligendi totam nobis aliquid id sit saepe tempora.'

    },
    {
        title: "asdasde",
        content: "asd sit amet consectetur adipisicing elit. Dolores aut fugiat asperiores modi dolorum quibusdam qui, tempora tenetur vel id ad voluptates nihil accusamus placeat ducimus repellat, fuga numquam voluptatem. Exercitationem modi maiores ipsa sunt, qui iste asperiores non similique placeat voluptate odio libero, voluptates commodi, unde cupiditate sequi! Quod cum repellendus nisi earum aut sunt sit quas soluta? Cupiditate itaque, illo eum facere veniam ex inventore voluptas soluta? Sunt vero iusto eligendi totam nobis aliquid id sit saepe tempora."

    },
    {
        title: "title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut fugiat asperiores modi dolorum quibusdam qui, tempora tenetur vel id ad voluptates nihil accusamus placeat ducimus repellat, fuga numquam voluptatem. Exercitationem modi maiores ipsa sunt, qui iste asperiores non similique placeat voluptate odio libero, voluptates commodi, unde cupiditate sequi! Quod cum repellendus nisi earum aut sunt sit quas soluta? Cupiditate itaque, illo eum facere veniam ex inventore voluptas soluta? Sunt vero iusto eligendi totam nobis aliquid id sit saepe tempora."

    },
    {
        title: "title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut fugiat asperiores modi dolorum quibusdam qui, tempora tenetur vel id ad voluptates nihil accusamus placeat ducimus repellat, fuga numquam voluptatem. Exercitationem modi maiores ipsa sunt, qui iste asperiores non similique placeat voluptate odio libero, voluptates commodi, unde cupiditate sequi! Quod cum repellendus nisi earum aut sunt sit quas soluta? Cupiditate itaque, illo eum facere veniam ex inventore voluptas soluta? Sunt vero iusto eligendi totam nobis aliquid id sit saepe tempora."

    },
    {
        title: "title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut fugiat asperiores modi dolorum quibusdam qui, tempora tenetur vel id ad voluptates nihil accusamus placeat ducimus repellat, fuga numquam voluptatem. Exercitationem modi maiores ipsa sunt, qui iste asperiores non similique placeat voluptate odio libero, voluptates commodi, unde cupiditate sequi! Quod cum repellendus nisi earum aut sunt sit quas soluta? Cupiditate itaque, illo eum facere veniam ex inventore voluptas soluta? Sunt vero iusto eligendi totam nobis aliquid id sit saepe tempora."

    },
    {
        title: "title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut fugiat asperiores modi dolorum quibusdam qui, tempora tenetur vel id ad voluptates nihil accusamus placeat ducimus repellat, fuga numquam voluptatem. Exercitationem modi maiores ipsa sunt, qui iste asperiores non similique placeat voluptate odio libero, voluptates commodi, unde cupiditate sequi! Quod cum repellendus nisi earum aut sunt sit quas soluta? Cupiditate itaque, illo eum facere veniam ex inventore voluptas soluta? Sunt vero iusto eligendi totam nobis aliquid id sit saepe tempora."

    }
]
for(project of projects) {
    project.addEventListener('click', (event) => { 
        const item = event.target;
        console.log(item);
        title.textContent = data[item.classList[0]].title;
        para.textContent = data[item.classList[0]].content;  
        overlay.style.display = 'flex'
        setTimeout(() => {
            overlay.style.opacity = 1;
            overlaycon.style.transform = 'scale(1)';
            body.style.overflow = 'hidden';
        },100)
        console.log(item);
        
    
    
    });
    
}

overlay.addEventListener('click', (e) => {
    if(e.target.classList[0] === 'overlay') {
        body.style.overflow = 'auto';
        overlay.style.opacity = 0;
        overlaycon.style.transform = 'scale(.1)';
        setTimeout(() => {
            overlay.style.display = 'none';
        },600)        
    }
});
