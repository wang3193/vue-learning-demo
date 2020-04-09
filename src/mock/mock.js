import Mock from 'mockjs'

Mock.mock('http://localhost:8080/login', 'POST', {
    name: 'test',
    form: 'mock'
})