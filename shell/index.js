/**
  *  @description: 每次提交代码都很麻烦,要add->commti->pull->add->commit->push.而且-m写什么也头疼,故此有此shell脚本.
  *  只需要你执行了npm run push我就会自动执行上述的步骤,并会-m'随机一个萌萌哒的moji'
  *  @author: sl
  *  @update :sl(2019/10/12)
*/
const shell = require('shelljs')
const gitmoji = [
  ':art:', ':zap:', ':fire:', ':bug:', ':ambulance:', ':sparkles:', ':pencil:', ':rocket:', ':lipstick:', ':tada:', 
  ':white_check_mark:', ':lock:', ':apple:', ':penguin:', ':checkered_flag:', ':robot:', ':green_apple:', ':bookmark:', ':rotating_light:'
]
let randomIndex = Math.floor(Math.random()*gitmoji.length)

shell.exec(`git add . && git commit -m '${gitmoji[randomIndex]}' && git pull origin master && git push origin master`)