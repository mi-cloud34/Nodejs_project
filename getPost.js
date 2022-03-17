const posts = [
   {title:"Post1",author:"mesut"},
   {title:"Post2",author:"emre"},
   {title:"Post3",author:"kübra"},
   {title:"Post3",author:"burak"},
   {title:"Post4",author:"ayse"},
              ];
  const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
      try {
        posts.push(newPost);
        resolve(posts);
      } catch (err) {
        reject(err);
      }
    });
  };
  
  const listPost = () => {
    return new Promise((resolve, reject) => {
      if (posts.length > 0) {
        posts.map((post) => {
          console.log(post.author);
        });
        resolve("Veriler sıralandı.");
      } else {
        reject("Bir hata oluştu.");
      }
    });
  };
  const newPost = { title:"post5",author:"murat" };
  async function process() {
    
    try {
      
      await addPost(newPost);
      await listPost();
      console.log("tüm postlar listelendi.");
    } catch (error) {
      console.log(error);
    }
  }
  
  process();
