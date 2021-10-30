const {  testingIncome } = require("./income")

test(`tax on 40000 is no tax`, ()=>{
    expect( testingIncome(40000)).toBe(`no tax`)
})
test(`tax on 500000 is 50000`, ()=>{
    expect( testingIncome(500000)).toBe(50000)
})
test(`tax on 50000000 is 1500000`, ()=>{
    expect( testingIncome(50000000)).toBe(1500000)
})

test(`tax on 2000 is no tax`, ()=>{
    expect( testingIncome(2000)).toBe(`no tax`)
})
test(`tax on 9000000 is 180000`, ()=>{
    expect( testingIncome(9000000)).toBe(180000)
})
test(`tax on 90000 is no tax`, ()=>{
    expect( testingIncome(90000)).toBe(`no tax`)
})
test(`tax on 10000000 is 200000`, ()=>{
    expect( testingIncome(10000000)).toBe(200000)
})