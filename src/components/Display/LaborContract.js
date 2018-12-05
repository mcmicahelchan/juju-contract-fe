import React from "react";
import { observable } from "mobx-react";
import moment from "moment";

export default class LaborContract extends React.Component {
  render() {
    const {
      startDate,
      endDate,
      partyA,
      partyB,
      partyA_name,
      partyB_name,
      salary,
      job
    } = this.props;
    return (
      <div style={{ height: 450, overflowY: "scroll", padding: 20 }}>
        <h1>劳动合同</h1>
        甲方：<u> {partyA_name} </u>
        <br />
        甲方账号：<u> {partyA} </u>
        <br />
        乙方：<u> {partyB_name} </u>
        <br />
        乙方账号：<u> {partyB} </u>
        <br />
        根据《中华人民共和国劳动法》和有关规定，甲乙双方经平等协商一致，自愿签订本合同，共同遵守本合同所列条款。
        <br />
        <br />
        一、劳动合同期限第一条本合同从
        <u> {moment(1543855493097).format("ll")} </u>至
        <u> {moment(1543855493097).format("ll")} </u>
        为期限的劳动合同。
        <br />
        <br />
        二、工作内容
        <br />
        第二条乙方同意根据甲方工作需要，担任<u> {job} </u>岗位(工种)工作。
        <br />
        第三条乙方工作应达到甲方规定的技术标准。
        <br />
        <br />
        三、劳动保护和劳动条件第四条甲方安排乙方执行八小时工时制度。
        <br />
        第五条甲方为乙方提供必要的劳动条件和劳动工具。
        <br />
        第六条甲方负责对乙方进行职业道德、业务技术、劳动安全、劳动纪律和甲方规章制度的教育。
        <br />
        <br />
        四、劳动报酬第七条甲方每月以货币形式支付乙方工资<u> {salary} </u>元。
        <br />
        第八条甲方生产工作任务不足使乙方待工的，甲方无需支付乙方的月生活费。
        <br />
        第九条有下列情形之一的，甲乙双方应变更劳动合同并及时办理变更合同手续：
        <br />
        (一)甲乙双方协商一致的;
        <br />
        (二)订立本合同所依据的客观情况发生重大变化，致使本合同无法履行的
        <br />
        第十条乙方有下列情形之一，甲方可以解除本合同：
        <br />
        (一)在试用期间被证明不符合录用条件的;
        <br />
        (二)严重违反劳动纪律或者甲方规章制度，按照甲方单位规定或者本合同约定可以解除劳动合同。
        <br />
        第十一条有下列情形之一的，甲方解除本合同：
        <br />
        (一)乙方患病或者非因工负伤，不能从事原工作也不能从事甲方另行安排的工作的;
        <br />
        (二)本合同订立时所依据的客观情况发生重大变化，致使合同无法履行，经甲乙双方协商不能就变更本合同达成协议的;
        <br />
        <br />
        五、当事人约定的其他内容第十二条甲乙双方约定本合同增加以下内容：
        <br />
        第一十三条乙方有下列情形之一，甲方可以解除本合同：
        <br />
        1、在试用期间，被证明不符合录用条件的;
        <br />
        2、严重违反劳动纪律或甲方规章制度的;
        <br />
        3、严重失职、营私舞弊，对甲方利益造成重大损害的;
        <br />
        4、被依法追究刑事责任的。
        <br />
        第一十四条有下列情形之一，乙方可以随时通知甲方解除本合同：
        <br />
        1、在试用期内的;
        <br />
        2、甲方以暴力、威胁、监禁或者非法限制人身自由的手段强迫劳动的;
        <br />
        3、甲方不能按照本合同规定支付劳动报酬或者提供劳动条件的。
        <br />
        <br />
        六、违约责任
        <br />
        1.在合同期内，甲方除《暂行规定》第十六条、第十九条、乙方除《暂行规定》第十七条规定的条件外，均不得解除合同或自行离职，否则应支付违约金500元。
        <br />
        2.甲乙双方必须严格履行劳动合同，除遇有特殊情况，经双方协商一致不能履行劳动合同的有关内容外，任何一方违反合同给对方造成经济损失的，应根据其后果和责任大小，给对方赔偿经济损失。赔偿金额按有关规定或实际情况确定。
        <br />
        乙方应遵守如下规定：乙方应每天按正常上班时间到甲方报到。
        <br />
        <br />
        七、劳动争议处理及其它
        <br />
        第十三条双方因履行本合同发生争议，当事人可以向甲方劳动争议调解委员会申请调解;调解不成的，应当自劳动争议发生之日起，60日内向劳动争议仲裁委员会申请仲裁。当事人一方也可以直接向劳动争议仲裁委员会申请仲裁
        <br />
        第十四条本合同未尽事宜或与今后国家、市人民政府有关规定相悖的，按有关规定执行。第十五条本合同一式两份，甲乙双方各执一份。
      </div>
    );
  }
}
