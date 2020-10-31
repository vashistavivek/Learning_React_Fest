const getMonth = (dateStr, seperator = " ") => {
    let date = new Date(dateStr);
    let outStr = "";
    outStr += date.getFullYear()%100;
    return outStr;
  }
