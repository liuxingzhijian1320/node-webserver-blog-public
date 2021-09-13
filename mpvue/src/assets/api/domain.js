const { NODE_ENV } = process.env;
let domain = "";
if (NODE_ENV == "development") {
  domain = "http://localhost:5454";
} else {
  domain = "？？？？？";
}

export const DOMAIN = domain;
