export function splitDateTime(dateTimes) {
  let result = {};

  if (dateTimes) {
    let [date, time] = dateTimes.split(' ');

    result.date = date;
    result.time = time;
  }

  return result;
}

export function convertDescriptionToHTML(description = '') {
  const paragraphs = description.split('\n').map((paragraph) => `<p>${paragraph}</p>`);
  const htmlDescription = paragraphs.join('');
  return htmlDescription;
}
