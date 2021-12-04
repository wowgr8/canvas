// const blogs = [ 
//   {title: 'mac & cheese rules', likes: 20, author: 'Rihanna'},
//   {title: 'why dogs are better than cats', like: 17, author: 'D.Tosh'}
// ] 

// console.log(blogs);

let user = {
  name: 'Cesar',
  age: 30,
  email: 'cesar@example.com',
  location: 'Berlin',
  blogs: [
    {title: 'mac & cheese rules', likes: 20, author: 'Rihanna'},
    {title: 'why dogs are better than cats', likes: 17, author: 'D.Tosh'}
  ],
  login: function(){ // short alt way to write line 7: login(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes, blog.author);
    })
  },
};



user.logBlogs();
