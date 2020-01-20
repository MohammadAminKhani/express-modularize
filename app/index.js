var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
  res.send(`
        <h2>Hello Dadashi!!</h2>
        <p>yeah!! modularization works!! </p>
        <p>Horrraaa .... :)</p>
        <p style="direction: rtl">دیگه لازم نیست همه چیزو توی app.js بنویسیم! میتونیم پاس بدیم به فایلی دیگر مثل index.js عزیز و از اونجا module.exports استفاده کنیم و در app.js هم از app.use-require !</p>
    `)
})

module.exports = router
