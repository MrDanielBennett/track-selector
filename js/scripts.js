$(function(){
  $("#track-app").submit(function(event){
    event.preventDefault();
    var interestinput = $("select#interest").val();
    var companytypeinput = $("select#companytype").val();
    var attractiveinput = $("select#attractive").val();
    var companynameinput = $("select#companyname").val();
    var languageinput = $("select#language").val();

    var ruby = 0;
    var php = 0;
    var java = 0;
    var cnet = 0;


  if (interestinput === "ruby1"){
    ruby +=1;
  } else if (interestinput === "php1"){
    php +=1;
  } else if (interestinput === "java1"){
    java +=1;
  } else if (interestinput === "cnet1"){
    cnet +=1;
  }

  if (companytypeinput === "ruby2"){
    ruby +=1;
  } else if (companytypeinput === "php2"){
    php +=1;
  } else if (companytypeinput === "java2"){
    java +=1;
  } else if (companytypeinput === "php2"){
    cnet +=1;
  }

  if (attractiveinput === "ruby3"){
    ruby +=1;
  } else if (attractiveinput === "php3"){
    php +=1;
  } else if (attractiveinput === "java3"){
    java +=1;
  } else if (attractiveinput === "php3"){
    cnet +=1;
  }

  if (companyname === "ruby4"){
    ruby +=1;
  } else if (companyname === "php4"){
    php +=1;
  } else if (companyname === "java4"){
    java +=1;
  } else if (companyname === "php4"){
    cnet +=1;
  }

  if (language === "ruby5"){
    ruby +=1;
  } else if (language === "php5"){
    php +=1;
  } else if (language === "java5"){
    java +=1;
  } else if (language === "php5"){
    cnet +=1;
  }

  $("#result-well").show();
  if (ruby > php+java+cnet) {
    $("p#answer").text("Ruby/Rails");
  } else if (php > ruby+java+cnet) {
    $("p#answer").text("PHP/Drupal");
  } else if (java > php+ruby+cnet) {
    $("p#answer").text("Java/Android");
  } else if (cnet > java+php+ruby);
    $("p#answer").text("C#/.Net");
  })

});
