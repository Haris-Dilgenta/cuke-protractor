const {Before,After,BeforeAll,AfterAll}=require('cucumber')

BeforeAll(()=>{
    console.log("*************Before all*******************")
})

AfterAll(()=>{
    console.log("*************After all*************")
})

Before(()=>{
    console.log("***********Before************")
})

After(()=>{
    console.log("**********After***************")
})