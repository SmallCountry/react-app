/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-30 14:24:31
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-30 14:37:50
 */
export default {
    formateDate(time) {
        if (!time) return '';
        let date = new Date(time);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
}