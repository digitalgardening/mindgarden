let docs = document.links; //get all links in the document
let docLinks = []; //make an array for storing all same origin links

for (const i in docs) {
  //iterate through all same origin and cross origin links
  let uri = docs[i].href; //get the link referenced (docs[i] is the <a> element itself)
  //could not find out how to weed out cross origin urls
  docLinks.push(uri); //add to the array of urls
}

let navigation = (linkGraph) => {
  //to be safe, pass the linkGraph parameter to the function directly
  for (const z in docLinks) {
    let prev = docLinks[z]; //are there already inbound links for this page stored in localStorage? that's what we're asking
    if (linkGraph.get(prev)) {
      //if there's already inbound links to this page
      let oldArray = linkGraph.get(prev); //let's get the array that stored the urls for the old inbound links
      let tuple = [document.title, location.href]; //trying to store title as well as location
      oldArray.push(tuple);
      linkGraph.set(prev, oldArray); //let's save the modified array to localStorage under the page name
    } else if (!linkGraph.get(prev)) {
      // this is if there are no previous inbound links for this page
      let newArray = []; //create a new array to store inbound links
      let tuple = [document.title, location.href]; //trying to store title as well as location
      newArray.push(tuple);
      linkGraph.set(prev, newArray); //let's save this new array to localStorage under the page name
    }
  }
};

let deduplicate = (array) => {
  let hash = {};
  let out = [];
  for (const i in array) {
    let key = array[i].join("|");
    if (!hash[key]) {
      out.push(array[i]);
      hash[key] = "found";
    }
    return out;
  }
};

let display = (linkGraph) => {
  let array = linkGraph.get(location.href); //this is an array of tuples, for inbound links and title, maybe w/ duplicates
  let inboundLinks = deduplicate(array); //remove duplicates from array of arrays
  console.log(inboundLinks === array); //is it removing duplicates?
  if (inboundLinks) {
    for (const item in inboundLinks) {
      let p = document.createElement("p");
      p.innerHTML = `&#x2734; Referenced in <a href="${inboundLinks[item][1]}">${inboundLinks[item][0]}</a><iframe src="${inboundLinks[item][1]}" loading="lazy" class="hover" width="50%" height="100%"></iframe>`;
      document.getElementById("padding").append(p);
    }
  } else {
    console.log("No inbound links.");
  }
};

let links = localStorage.getItem("backlinks"); //get backlinks from localStorage (we'll see if they exist)
if (links) {
  //if the backlinks are already in localStorage we don't need to do as much work
  let linkGraph = new Map(JSON.parse(links)); //we need to get the map back from its stringified form
  navigation(linkGraph); //do the work of storing inbound links for later
  display(linkGraph);
  let storage = JSON.stringify(Array.from(linkGraph.entries())); //stringify our work for the browser
  localStorage.setItem("backlinks", storage); //save our work for later
} else {
  let linkGraph = new Map(); //we need to create a new map to store links in and save to localStorage
  navigation(linkGraph); //do the work of storing inbound links
  display(linkGraph);
  let storage = JSON.stringify(Array.from(linkGraph.entries())); //stringify our work for the browser
  localStorage.setItem("backlinks", storage); //save our work for later
}

document.querySelector("button").style.display = "none";
