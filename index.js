const { faker } = require('@faker-js/faker')
module.exports = () => {
  const data = { users: [], posts: [] }

  //Create 1000 users and posts

  for (let i = 1; i <= 1000; i++) {
    data.users.push({
      id: i,
      name: `user${i}`,
      email: faker.internet.email(),
    })

    data.posts.push({
      id: i,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      author: Math.floor(Math.random() * 1000) + 1,
    })
  }

  return data
}
