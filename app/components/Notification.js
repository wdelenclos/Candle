// ---- Dashboard

import {Candle} from '../../core/core.js';
import NotificationAction from '../actions/NotificationAction.js';

export const Notification =
    Candle.dom.createEl('div', {

            attrs: {
                "class": "container",
                "style" : "position: fixed; padding: 0 32px; bottom: 0; height: 56px"
            },
            children: [
                Candle.dom.createEl('div', {
                    attrs: {
                        "class": 'toast toast-success d-none',
                        "id": "notification",
                    },
                    children: [
                        Candle.dom.createEl('button', {
                            attrs: {
                                'class': 'btn btn-clear float-right'
                            },
                            event: {
                                trigger: "click",
                                action: NotificationAction
                            }
                        }),
                        Candle.dom.createEl('span', {
                            attrs: {
                                "id": "notificationBody"
                            },
                            children: [
                                ""
                            ]
                        })
                    ],
                })
            ]
        }
    );
