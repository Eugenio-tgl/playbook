const pullRequest = {
 title: "Issue",
 branchName: "Ex 3 of Backend",
 dateCreated: "January 15th 2010",
 status: "Live",
 repositoryNameAssociated: "Some Dude",

 getStatus: function(){
   return this.title + this.author
 },
 getTitleAndAutor: function(){
   return `This repository ${this.title} is ${this.status}`
 }
}

console.log("Nombre del repo:" + pullRequest.title)
console.log("Comentarios totales: " + pullRequest.numberOfComments)
console.log(pullRequest.getGeneralInfo())