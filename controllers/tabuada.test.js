const tabuadaController = require('./tabuada');
const sinon = require('sinon');

describe('tabuadaController', () => {
    it('list', () => {
        const nums = [];
        for (let i = 1; i <= 100; i++) {
            nums.push(i)
        }
        let res = {
            render: function () { }
        }
        let mock = sinon.mock(res);
        mock.expects('render').once().withArgs('tabuada/list', { nums });
        tabuadaController.list({}, res)
    })

    it('calculates Tabuada', () => {
        const tabuadas = [];
        const num = 10;
        for (let i = 0; i <= 100; i++) {
            tabuadas.push({
                num,
                i,
                result: num * i
            })
        }
        let res = {
            render: function () { }
        }
        let mock = sinon.mock(res);
        mock.expects('render').once().withArgs('tabuada/tabuada', {
            num,
            tabuadas
        })
        tabuadaController.tabuada({ params: { num } }, res);
    })
})