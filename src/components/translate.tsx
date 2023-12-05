const translate: any = {
  footer: "Copyright KEZO - 2023",
  add: "Add City",
  share: "Share Link",
  nofeed: "No Feedback Available",
  feed: "Feedback Available to Review",
  view: "View More",
  paper_collection: "Paper collection should be on Tuesday",
  feedback: "Feedbacks",
  last_shared: "Last Shared",
  date: "11 Nov 2023 on 3:32 PM",
  example_one: "Feedback Example no. 1",
  example_two: "Feedback Example no. 2",
  admin: "Admin name",
  email: "sampleemail@gmail.com",
  version: "Versioning",
  paper: "Paper",
  waste: "Waste",
  edit_city: "Edit City",
  delete: "Delete City",
  add_email: "Add Email Address",
  not_shared_yet: "Not Shared Yet",
  delete_and_upload: "Delete and Upload Again",
};

const t = (phrase: string) => {
  return translate[phrase] || phrase;
};

export default t;
