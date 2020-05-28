export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

/* const bookFormat = (book: GoogleBook) => {
  return {
    title: book.volumInfo.title,
  };
}; */
export const searchBooks = async (query: string): Promise<any> => {
  try {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query,
      )}`,
    ).then((data) => data.json());
    return results;
  } catch (error) {
    console.log(error);
  }
};
