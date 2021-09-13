class HttpError extends Error {
  constructor(message) {
    super(message);
    this.name = "HttpError";
  }

  description = (mess) =>
    `${this.name}:  Can not " ${mess} " unicorn, some problems with "${mess}" request`;
}

export default HttpError;
