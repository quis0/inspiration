class ImageAPI {
  constructor() {}

  async getPhotoLink() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
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
