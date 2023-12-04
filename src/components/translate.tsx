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
};

const t = (phrase: string) => {
  return translate[phrase] || phrase;
};

export default t;
