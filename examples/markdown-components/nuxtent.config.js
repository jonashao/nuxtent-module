module.exports = {
  content: {
    permalink: ":slug",
    isPost: false,
    routes: [
      {
        name: "slug",
        method: "get"
      }
    ]
  }
}