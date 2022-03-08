//const tbody1 = document.querySelector("#score-table tbody");
/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
    let html = '';
    rows.forEach(student => {
        html += `<tr><td>${student[0]}</td><td>${student[1]}</td></tr>`;

        //没看题目，下面这样做也可以，这样就相当于直接添加了元素，就跟html这个字符串毫无关系了
        // const tr = document.createElement('tr');
        // tbody1.appendChild(tr);
        // student.forEach(text => {
        //     const td = document.createElement('td');
        //     td.innerHTML = text;
        //     tr.appendChild(td);
        //})
    })
    return html;//要有return不然会有undefined出现   
}
/**
 * @description 返回第一名列表 html 字符串 
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows){
    let firtsHTMl='';
    //题目已经给成绩进行排序了，这里不需要另外排序
    let [[first_name,first_score]] = rows;
    firtsHTMl = `<li>第一名：${first_name}，分数：${first_score}</li>`;
    return firtsHTMl;
}

/**
 * @description 返回最后一名列表 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows){
    let lastHTMl='';
    //题目已经给成绩进行排序了，这里不需要另外排序
    let [[last_name,last_score]] = rows.reverse();
    lastHTMl = `<li>第一名：${last_name}，分数：${last_score}</li>`;
    return lastHTMl;
   
}

/**
 * @description 返回平均分 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows){
    let sum = 0; //一定要初始化不然会出问题
    rows.forEach(student=>{
        let score = student[1]-'';
        sum += score;
    })
    console.log(sum);
    let average = (sum / rows.length).toFixed(2);
    return `<li>平均分：${average}</li>`
}
