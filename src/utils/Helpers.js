// import Hashids from 'hashids'
import moment from 'moment/moment';
//hash ids config
// const hashids = new Hashids('', 6) // pad to length 10

//non exports
function slugify(text) {
  return text
    .toString()                     // Convert to string
    .toLowerCase()                   // Convert to lowercase
    .trim()                         // Trim leading and trailing spaces
    .replace(/\s+/g, '-')            // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '')        // Remove non-word characters except hyphens
    .replace(/--+/g, '-')            // Replace consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');        // Remove leading and trailing hyphens
}

export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};


export function currencyFormat(symbol, num) {
  return symbol + ' ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function hashUrlId(id) {

  const hashedId = hashids.encode(id)
  return hashedId;
}

export function decodeUrlId(hashedId) {
  const id = hashids.decode(hashedId);
  return id[0];
}



export function truncatePhoneNumber(phoneNumber) {
  // Check if the input is a valid phone number (you can add more validation if needed)
  if (typeof phoneNumber !== 'string' || !/^\+?\d+$/.test(phoneNumber)) {
    return 'Invalid Phone Number';
  }

  // Determine the length of the truncated portion (you can adjust this as needed)
  const truncatedLength = 4; // For example, keep the last 4 digits

  // Get the last 'truncatedLength' characters of the phone number
  const lastDigits = phoneNumber.slice(-truncatedLength);

  // Create a string of 'x' characters with the same length as the remaining phone number
  const xString = 'x'.repeat(phoneNumber.length - truncatedLength);

  // Concatenate the 'x' string and the last digits
  const truncatedPhoneNumber = xString + lastDigits;

  return truncatedPhoneNumber;
}

export function numberToDayOfWeek(number) {
  // Parse the input to ensure it is treated as an integer
  const parsedNumber = parseInt(number, 10);

  // Check if the parsedNumber is within the valid range (1 to 7)
  const validNumber = Math.max(1, Math.min(7, parsedNumber));

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Get the day of the week from the array using the (validNumber - 1) as the index
  return daysOfWeek[validNumber - 1];
}

export function shortenOpenHours(array) {
  //check if there's a monday to friday  there
  weekdayRef = array.filter((i) => {
    return i.day > 1 && i.day < 7
  })
  //if there are no weekdays cancel everything
  if (weekdayRef.length < 5) {
    return false;
  }
  let mismatches = 0;
  array.map((i) => {
    if (i.day > 1 && i.day < 7) {
      if (i.open === weekdayRef[0].open && i.close === weekdayRef[0].close) {

      }
      else {
        mismatches++
      }
    }
  })

  if (mismatches === 0) {
    return true;
  }
  else {
    return false
  }
}

export function formatTimeToAMPM(timeString) {
  const time = moment(timeString, 'HH:mm:ss');
  return time.format('hh:mm A');
}

export function formatDateToEnglish(sqlDate) {
  const formattedDate = moment(sqlDate).format('dddd Do MMMM YYYY');
  return formattedDate;
}


export function formatDateToEnglishTime(sqlDate) {
  const formattedDate = moment(sqlDate).format('dddd Do MMMM YYYY, h:mm A');
  return formattedDate;
}


export const formatDateMonthYear = (dateString) => {
  const options = { year: 'numeric', month: 'long' };
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
};


export function slugifyAndHashUrlId(text, id) {
  const slug = slugify(text);
  const hashedId = hashids.encode(id);
  return `${slug}-${hashedId}`;
}

export function decodeUrlIdFromSlug(slug) {
  const parts = slug.split('-');
  if (parts.length >= 2) {
    const hashedId = parts.pop(); // Get the last part as the hashed ID
    //const text = parts.join('-'); // Join the remaining parts as the text
    const id = hashids.decode(hashedId);
    return id[0];
  }
  return null; // Invalid format
}

export function decodeTextFromSlug(slug) {
  const parts = slug.split('-');
  if (parts.length >= 2) {
    const textParts = parts.slice(0, parts.length - 1); // Exclude the last part (the ID)
    const originalText = textParts.join('-').replace(/-/g, ' '); // Join and replace hyphens

    return originalText;
  }
  return null; // Invalid format
}

export function convertToEmbedURL(youtubeURL) {
  // Check if the input URL is already in the embedded format
  if (youtubeURL.includes("youtube.com/embed/")) {
    return youtubeURL;
  }

  // Use regular expression to extract the video ID
  const videoIDMatch = youtubeURL.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^?&"]+)/);

  if (videoIDMatch && videoIDMatch[1]) {
    const videoID = videoIDMatch[1];
    return `https://www.youtube.com/embed/${videoID}`;
  } else {
    return null; // Invalid YouTube URL
  }
}
// a function to reorder a given array and place a ids in a smaller array above the rest
export function kingMaker(array, ids) {
  let kingsData = [];

  ids.map((i) => {
    array.map((j) => {
      if (i === j.id) {
        kingsData.push(j);
      }
    })
  })

  const  remaining = array.filter((i) => !ids.includes(i));

  return [...kingsData, ...remaining];
}

export function formatLikeCount(likeCount) {
  if (likeCount < 1000) {
      // If less than 1000, simply return the count as is
      return likeCount.toString();
  } else if (likeCount < 1000000) {
      // If less than 1 million, format as 'xk' or 'x.xk' if there are decimal places
      const kCount = likeCount / 1000;
      return kCount % 1 === 0 ? kCount + 'k' : kCount.toFixed(1) + 'k';
  } else {
      // If 1 million or more, format as 'xm' or 'x.xm' if there are decimal places
      const mCount = likeCount / 1000000;
      return mCount % 1 === 0 ? mCount + 'm' : mCount.toFixed(1) + 'm';
  }
}

export const getImage = (image) => {
  // Regular expression to check if the image string starts with http or https
  const urlPattern = /^https?:\/\//i;

  // If the image string matches the urlPattern, return the image as is
  if (urlPattern.test(image)) {
    return image;
  }

  // Otherwise, construct the URL using VITE_FULL_URL and VITE_IMAGE_URL
  return `${import.meta.env.VITE_FULL_URL}/${import.meta.env.VITE_IMAGE_URL}/${image}`;
}

export function getYear(dateString)
{
  const date = new Date(dateString);
  const year = date.getFullYear();
  return year;
}
export function getMonthDay(dateString) {
  const date = new Date(dateString);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
}


export const roles = {
  1: "admin", 
  2: "Advertiser",
  3: "User",
  4: "Publisher",
}

export const calcTotalAmount = (amount) => {
  let charges;
  const calcChargesAmount = (3 / 100) * Number(amount);
  if (calcChargesAmount > 3000) {
    charges = 3000;
  } else {
    charges = calcChargesAmount;
  }
  console.log(charges, amount + charges);
  // return amount + charges;

  return {
    totalAmount: Number(amount) + charges,
    charges: charges,
  };
};