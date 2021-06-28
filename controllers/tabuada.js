const list = (req, res) => {
    const nums = [];
    for (let i = 1; i <= 100; i++) {
        nums.push(i)
    }
    res.render('tabuada/list', { nums })
}
const tabuada = (req, res) => {
    const tabuadas = [];
    const num = req.params.num;
    for (let i = 0; i <= 100; i++) {
        tabuadas.push({
            num,
            i,
            result: num * i
        })
    }
    res.render('tabuada/tabuada', {
        num: req.params.num,
        tabuadas
    });
}

module.exports = { list, tabuada }