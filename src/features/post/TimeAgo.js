import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        console.log(timestamp)
        const date = parseISO(timestamp)
        console.log(date)
        const timePeriod = formatDistanceToNow(date)
        console.log(timePeriod)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo