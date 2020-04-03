import Mock from 'mockjs'

Mock.mock('http://localhost:8080/info',{
    name: 'test',
    form: 'mock'
})