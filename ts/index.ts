import { v4 } from 'uuid';
import { User } from "./user";
import { todaysMeal } from "./mail";

const user: User = {
    familyName: "二階堂",
    givenName: "真紅",
    age: 17
}

const food = 'rise';
const calories: number = 200;

const contentsElem = document.getElementById('contents');
if (contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
//HTMLエレメントを取得 キャストすることで、入力補完が効く
const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
saibanButton.onclick = (e) => {
    const text = todaysMeal(food, calories);
    uuidSpan.innerText = `id ${v4()} says \"${text}\"`;
}