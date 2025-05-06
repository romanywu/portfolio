class Content {
  home: boolean;
  about: boolean;
  education: boolean;
  work: boolean;
  projects: boolean; // Added projects
  resume: boolean; // Added resume
  contact: boolean;

  constructor(
    home: boolean,
    about: boolean,
    education: boolean,
    work: boolean,
    projects: boolean,
    resume: boolean,
    contact: boolean
  ) {
    this.home = home;
    this.about = about;
    this.education = education;
    this.work = work;
    this.projects = projects;
    this.resume = resume;
    this.contact = contact;
  }
}

export default Content;
