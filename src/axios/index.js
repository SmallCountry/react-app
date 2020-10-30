/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-30 14:49:57
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-30 15:06:12
 */
// encodeURIComponent  是做什么的
// jsonp的使用范围
// 导出class 是什么语法 
// static 语法
import JsonP from 'jsonp'
export default class Axios {
    static jsonP(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                param: 'callback'
            }, function (err) {
                    
            })
        })
    }
}