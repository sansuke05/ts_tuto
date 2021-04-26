import { v4 } from 'uuid';
import { User } from "./user";

const user: User = {
    familyName: "二階堂",
    givenName: "真紅",
    age: 17
}

const contentsElem = document.getElementById('contents');
if (contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
//HTMLエレメントを取得 キャストすることで、入力補完が効く
const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
saibanButton.onclick = (e) => {
    uuidSpan.innerText = v4();
}