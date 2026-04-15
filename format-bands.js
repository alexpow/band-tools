var bandTools = function(shows)
{
  let hasShows = false;
  
  var dateFormat = function(date)
  {
    let year = date.split("/")[2];
    let month = date.split("/")[0];
    month = month-1;
    let day = date.split("/")[1];
    let jsDate = new Date(year, month, day);
  
    let diff = new Date().getTime() - jsDate.getTime();
    if (diff < 0) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[month] + ' ' + day + ((new Date().getFullYear() == year)? '' : ', ' + year);
    }
    else {
      return null;
    }
  };

  var tableData = function(info)
  {
    var testDate = dateFormat(info.date);
    if (!testDate)
    {
      return '';
    }

    hasShows = true;
    var bandLink = (info.link)? '<a href="' + info.link + '">' + testDate + '</a>' : '<span>' + testDate + '</span>';
    
    return '<tr><td>' + (bandLink) + '</td><td>with ' + info.bands + '</td><td>at ' + info.location;
  };
  
  var layout = function(shows)
  {
    var showsEle = document.getElementById('shows');
    let tableRows = [];

    shows.forEach((show) => tableRows.push(tableData(show)));

    if (hasShows)
    {
      tableRows.forEach((row) => showsEle.innerHTML += row);
    }
    else
    {
      showsEle.innerHTML = 'No shows coming up.';
    }
  };
  
  layout(shows);
};

if (Array.isArray(shows))
{
  bandTools(shows);
}
