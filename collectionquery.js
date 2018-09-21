var xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.responseXML.title);
}
xhr.open("GET", "https://www.colchester.gov.uk/check-my-collection-day/?query=aae96a3d-6027-e711-80fa-5065f38b56d1&name=18%20Chaney%20Road#ValidationSummaryEntityFormView.html");
xhr.responseType = "document";
xhr.send();


