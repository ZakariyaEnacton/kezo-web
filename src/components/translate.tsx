const translate: any = {
  footer: "Copyright KEZO - 2023",
  add: "Add City",
};

const t = (phrase: string) => {
  return translate[phrase] || phrase;
};

export default t;
