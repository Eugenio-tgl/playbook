const issue = {
 title: "Issue",
 repositoryNameAssociated: "Ex 2 of Backend",
 status: "live",
 numberOfComments: 100,
 labels: 199,
 author: "Kidojikuto",
 dateCreated: "January 15th 2010",
 lastUpdated: "April 21th 2022",

 getTitleAndAuthor: function(){
   return this.title + this.author
 },
 getGeneralInfo: function(){
   return `This repository ${this.title} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + issue.title)
console.log("Comentarios totales: " + issue.numberOfComments)
console.log(issue.getGeneralInfo())