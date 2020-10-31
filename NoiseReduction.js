const getDateDDMMYY = (dateStr, seperator = " ") => {
    let date = new Date(dateStr);
    let outStr = "";
    outStr += date.getDate();
    outStr += seperator;
    outStr += getMonth(date.getMonth());
    outStr += seperator;
    outStr += date.getFullYear()%100;
    return outStr;
  }
