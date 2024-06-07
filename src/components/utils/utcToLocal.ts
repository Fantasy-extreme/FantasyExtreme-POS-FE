import moment from 'moment';
import numeral from 'numeral';
import { toast } from 'react-toastify';


const utcToLocal = (
  date: BigInt,
  format: string,
): string => {

  if (!date) {
    return moment.utc().local().format(format);
  } else {
    return moment(parseInt(date.toString())).local().format(format);
  }


};
const commentTime = (creatDate: any) => {
  moment.locale('en-au');
  const stillUtc = moment.utc(parseInt(creatDate)).toDate();
  let tempCreation = moment(stillUtc).local().fromNow();
  return tempCreation;
};
function formatLikesCount(likes: any) {
  if (likes >= 1000000000) {
    return numeral(likes).format('0.0a').toUpperCase();
  } else if (likes >= 1000000 && likes < 1000000000) {
    return numeral(likes).format('0.0a').toUpperCase();
  } else if (likes >= 1000 && likes < 1000000) {
    return numeral(likes).format('0.0a').toUpperCase();
  } else {
    return likes.toString();
  }
}

export { utcToLocal, formatLikesCount, commentTime };
