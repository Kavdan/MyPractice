import { parseISO, formatDistanceToNow } from 'date-fns'
import React from 'react'

const TimeAgo = ({ timestapm }) => {
    let timeAgo = "";
    if (timestapm) { 
        const date = parseISO(timestapm);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }
  return (
    <span title={timestapm}>
        <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo

/*<span title={timestap} - Атрибут title в теге <span> добавляет
    всплывающую подсказку с текстом заголовка к элементу span.
    При наведении указателя мыши на элемент span отобразится всплывающая подсказка.
*/