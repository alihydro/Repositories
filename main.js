let TheInput = document.querySelector(".get input");
let getBottun = document.querySelector(".get .get-button");
let reposeData =  document.querySelector(".show-data");


getBottun.onclick = function () {
    getrepose()  
}













function getrepose() {
    if (TheInput.value === "") {
        reposeData.innerHTML = "<span>Please write GitHub UserName. </span>"
    } else {
       fetch(`https://api.github.com/users/${TheInput.value}/repos`)
       .then((response) => {
          return response.json();
           })
           .then((repositories) => {
            reposeData.innerHTML = " "

            repositories.forEach(repo => {
              let mainDiv = document.createElement('div');
             
             
             
              let repoName = document.createTextNode(repo.name);


             let TheUrl = document.createElement('a');
             let TheUrlText = document.createTextNode('visit');

             TheUrl.href = `https://github.com/${TheInput.value}/${repo.name}`

             TheUrl.setAttribute('target' , '_blank') ;
             mainDiv.className ="repo-box"
             let starspan = document.createElement("span")
             let starstext = document.createTextNode(`STARS :${repo.stargazers_count}`)
             starspan.appendChild(starstext);
              mainDiv.appendChild(repoName);
              reposeData.append(mainDiv);
              TheUrl.appendChild(TheUrlText);
              mainDiv.appendChild(TheUrl);
              mainDiv.appendChild(starspan);
            });
           }) ;

    }
}
