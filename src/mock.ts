// @ts-ignore
import Mock from 'mockjs'

Mock.setup({
  timeout: '2000-4000',
})
export default Mock.mock('http://127.0.0.1:7999/inteGration/hardwareControl/api/idcard', {
  success: 'True',
  mes: '操作成功',
  obj: [
    {
      name: '@name',
      sex: '男',
      nation: '汉',
      birthday: '1992-7',
      addr: '广州市天河智慧城软件路15号',
      idcode: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
      department: '广东省广州市政府',
      startDate: '2010-9-9',
      endDate: '2018-12-9',
    },
  ],
})

// 'name'    : '@name',
//   'age|1-100': 100,
//   'color'    : '@color'
