class QuoteAPI {

  constructor() {}

  async getQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (response.ok) {
        return await response.json();
      } else {
        return Promise.reject(response.status);
      }

    } catch (err) {
      return Promise.reject(err);
    }
  }
}
