let my_resume = {
  basics: {
    name: "John Doe",
    label: "Programmer",
    picture: "",
    email: "john@gmail.com",
    phone: "(912) 555-4321",
    website: "http://johndoe.com",
    summary: "A summary of John Doe..."
    // location: {
    //   address: "2712 Broadway St",
    //   postalCode: "CA 94115",
    //   city: "San Francisco",
    //   countryCode: "US",
    //   region: "California"
    // },
    // profiles: [
    //   {
    //     network: "Twitter",
    //     username: "john",
    //     url: "http://twitter.com/john"
    //   }
    // ]
  },
  work: [
    {
      company: "Company",
      position: "President",
      website: "http://company.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary: "Description...",
      highlights: ["Started the company"]
    }
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      website: "http://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description...",
      highlights: ["Awarded 'Volunteer of the Month'"]
    }
  ],
  education: [
    {
      institution: "University",
      area: "Software Development",
      studyType: "Bachelor",
      startDate: "2011-01-01",
      endDate: "2013-01-01",
      gpa: "4.0",
      courses: ["DB1101 - Basic SQL"]
    }
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon."
    }
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      website: "http://publication.com",
      summary: "Description..."
    }
  ],
  skills: [
    {
      name: "Web Development",
      level: "Master",
      keywords: ["HTML", "CSS", "Javascript"]
    }
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker"
    }
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"]
    }
  ],
  references: [
    {
      name: "Jane Doe",
      reference: "Reference..."
    }
  ]
};

document.querySelector("header").innerHTML = `<h1>${my_resume.basics.name}</h1>
    <h4>${my_resume.basics.label}</h4>`;

// delete name and label to make iterating over basics easier
delete my_resume.basics.name;
delete my_resume.basics.label;

let article = document.querySelector("article");
let aside = document.querySelector("aside");

["work", "volunteer", "education"].forEach(resumeKey => {
  let header = document.createElement("h2");
  header.innerText = resumeKey;
  article.appendChild(header);

  let list = document.createElement("ul");

  // loop through each section and add to unordered list
  my_resume[resumeKey].forEach((entryObject, index) => {
    Object.keys(entryObject).forEach(key => {
      var resumeEntry = document.createElement("li");
      resumeEntry.innerText = `${key}: ${my_resume[resumeKey][index][key]}`;
      list.appendChild(resumeEntry);
    });
  });

  article.appendChild(list);
  delete my_resume[resumeKey];
});

let basicsList = document.createElement("ul");

// iterate over entries and add to unordered list
Object.keys(my_resume.basics).forEach(key => {
  var resumeEntry = document.createElement("li");
  resumeEntry.innerText = `${key}: ${my_resume.basics[key]}`;
  basicsList.appendChild(resumeEntry);
});

aside.appendChild(basicsList);
