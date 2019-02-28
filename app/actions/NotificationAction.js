import { Candle } from '../../../core/core.js';

export default function(){
    document.getElementById('notificationBody').innerText = "";
    document.getElementById('notification').classList.remove('d-remove');
    document.getElementById('notification').classList.add('d-none');
}